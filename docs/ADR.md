# Architecture Decision Records — Inspira Mujer

Registro de las decisiones de arquitectura más importantes del proyecto.
Formato basado en [MADR](https://adr.github.io/madr/).

---

## ADR-001 — Astro como framework principal

**Estado:** Aceptado  
**Fecha:** 2026-06-29

### Contexto
El proyecto necesita un sitio con múltiples páginas institucionales, contenido estático, futura integración de contenido dinámico (blog, eventos, podcast) y máximo rendimiento.

### Decisión
Usar **Astro 5** con output estático (`output: 'static'`).

### Justificación
- Genera HTML puro sin JavaScript en el cliente por defecto (zero-JS baseline)
- Soporte nativo de Content Collections con Zod
- Componentes `.astro` permiten coexistir con React/Vue en el futuro sin reescribir
- Lighthouse 100 alcanzable desde el día uno

### Consecuencias
- La hidratación de componentes interactivos requiere directivas explícitas (`client:load`, `client:idle`, etc.)
- Server-Side Rendering requiere cambiar `output` a `hybrid` o `server` en una etapa posterior

---

## ADR-002 — GitHub Pages como hosting

**Estado:** Aceptado  
**Fecha:** 2026-06-29

### Contexto
El proyecto en su etapa inicial no requiere server-side rendering ni funciones serverless. Se necesita un hosting confiable, gratuito y con soporte de dominio personalizado.

### Decisión
Desplegar en **GitHub Pages** con dominio personalizado `inspiramujer.com.ar` via `public/CNAME`.

### Justificación
- Costo cero para sitios estáticos públicos
- Integración nativa con GitHub Actions para CI/CD
- HTTPS automático via Let's Encrypt
- Dominio personalizado sin costo adicional

### Consecuencias
- El sitio debe ser completamente estático (sin funciones de servidor)
- Las funcionalidades dinámicas futuras (auth, formularios, IA) requerirán servicios externos o migración a Netlify/Vercel

---

## ADR-003 — Design Tokens con CSS Custom Properties

**Estado:** Aceptado  
**Fecha:** 2026-06-29

### Contexto
El design system necesita una fuente de verdad única para colores, tipografía y espaciado que sea consumida por Tailwind y accesible desde CSS puro.

### Decisión
Definir los tokens en `src/styles/global.css` como **CSS Custom Properties** (`--color-primary`, `--font-heading`, etc.) y referenciarlos en `tailwind.config.mjs`.

### Justificación
- Los tokens son accesibles en cualquier archivo CSS sin compilar Tailwind
- Cambiar un token actualiza toda la UI sin recompilar
- Compatible con herramientas de diseño que exportan CSS variables

### Consecuencias
- Los tokens deben mantenerse sincronizados entre `global.css` y `tailwind.config.mjs`
- No usar valores hardcoded de Tailwind para colores de marca (siempre usar las clases del design system)

---

## ADR-004 — Tailwind CSS 3

**Estado:** Aceptado  
**Fecha:** 2026-06-29

### Contexto
Se necesita un sistema de utilidades CSS que acelere el desarrollo de componentes con clases descriptivas y purga automática de estilos no usados.

### Decisión
Usar **Tailwind CSS 3** con `@astrojs/tailwind@3`. No migrar a Tailwind v4 todavía.

### Justificación
- API estable y documentación madura
- Integración oficial con Astro via `@astrojs/tailwind`
- Tailwind v4 cambia radicalmente la configuración (CSS nativo sin `tailwind.config.mjs`) y aún no tiene integración oficial estable con Astro 5

### Consecuencias
- La migración a Tailwind v4 requerirá reescribir `tailwind.config.mjs` y posiblemente `global.css`
- Evaluar migración post-Etapa 4 cuando la arquitectura de componentes esté estabilizada

---

## ADR-005 — Arquitectura por componentes (common / ui / sections)

**Estado:** Aceptado  
**Fecha:** 2026-06-29

### Contexto
Los componentes Astro necesitan una organización que refleje su nivel de abstracción y su frecuencia de reutilización.

### Decisión
Organizar `src/components/` en tres capas:

```
components/
  common/     ← Header, Footer (una instancia por página)
  ui/         ← Button, Card, Badge... (reutilizables en cualquier contexto)
  sections/   ← Hero, Features, CTA... (bloques de página, usan componentes ui/)
```

### Justificación
- `common/` agrupa componentes únicos de layout que aparecen una vez por página
- `ui/` contiene los átomos del design system, sin lógica de negocio
- `sections/` agrupa bloques de contenido que componen las páginas

### Consecuencias
- Los componentes `ui/` no deben tener dependencias de `config/` directas (reciben datos por props)
- Los componentes `sections/` pueden leer `config/` y llamar `services/`

---

## ADR-006 — Servicios desacoplados con Patrón Adaptador

**Estado:** Aceptado  
**Fecha:** 2026-06-29

### Contexto
El proyecto integrará múltiples servicios externos (OpenAI, n8n, Resend, Google Calendar, Mercado Pago). Los detalles de implementación de cada proveedor no deben filtrarse al resto del código.

### Decisión
Cada servicio externo vive en `src/services/` con su propia interfaz TypeScript. El código que consume el servicio depende únicamente de la interfaz, no de la implementación.

### Justificación
- Cambiar de proveedor (ej. de Resend a SendGrid) no requiere modificar el código consumidor
- Las interfaces permiten crear implementaciones mock para tests
- Estructura clara: un directorio por dominio (`ai/`, `automation/`, `integrations/`, `storage/`, `api/`)

### Consecuencias
- Cada servicio externo debe tener su adaptador propio antes de ser usado
- Las implementaciones reales se añaden en etapas posteriores; los placeholders actuales son solo interfaces TypeScript
