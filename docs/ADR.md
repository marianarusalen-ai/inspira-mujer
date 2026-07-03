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

---

## ADR-007 — Contraste WCAG AA del color primario usado como texto

**Estado:** Aceptado — Implementado (Etapa 7)  
**Fecha:** 2026-06-30

### Contexto
`--color-primary` (#da599b) es el color de marca principal. Se usa en dos roles distintos:

1. **Decorativo / superficie** — fondos de `Button primary`, relleno de `Badge`, acentos visuales, bordes y elementos geométricos. En estos usos el contraste con el texto superpuesto (texto oscuro sobre fondo primario) fue corregido a 5.77:1 en Etapa 5.

2. **Texto / link** — clase `text-primary`, selector global `a { color: var(--color-primary) }` en `src/styles/global.css`, eyebrow labels (`text-sm font-semibold uppercase tracking-widest`), `member.role` en las cards del equipo. Sobre fondos claros (`bg-surface` #ffffff, `bg-surface-alt` #faf7f8) el contraste era **~3.6:1**, por debajo del mínimo WCAG AA de 4.5:1 para texto normal.

El problema era sistémico: se arrastraba desde el scaffold inicial y afectaba toda la aplicación. No se detectó como bloqueante hasta Etapa 5, cuando se auditaron los contrastes de botones.

### Opciones evaluadas

**Opción A — Oscurecer `--color-primary`**  
Cambiar el valor del token (ej. a ~#a03070, contraste ~5.2:1 sobre blanco).  
Desventaja: modifica el color de marca en toda la UI — botones, badges, decoraciones — y aleja la identidad visual aprobada. **Descartada.**

**Opción B — Introducir `--color-link` separado** ✓ *Implementada*  
Mantener `--color-primary` (#da599b) para uso decorativo/superficie; definir un nuevo token `--color-link` con valor más oscuro derivado del mismo hue.  
Ventaja: la identidad visual de botones y decoraciones no cambia; el design system expresa correctamente la diferencia semántica entre "color de marca" y "color de texto interactivo".

**Opción C — Parches locales**  
Descartada: perpetúa la inconsistencia y hace el design system impredecible.

### Decisión
Implementar **Opción B**: introducir `--color-link` como token separado de `--color-primary`.

Valores finales calculados (mismo hue 329°, saturación 60%, ajustando lightness para WCAG AA):

| Token | Valor | Contraste / blanco | Contraste / surface-alt |
|---|---|---|---|
| `--color-link` | `#c4317d` | **5.15:1** ✓ | **4.87:1** ✓ |
| `--color-link-hover` | `#a32968` | **6.83:1** ✓ | **6.47:1** ✓ |

### Implementación (Etapa 7)

- `src/styles/global.css` — nuevos tokens `--color-link` / `--color-link-hover`; `a { color }` y `a:hover { color }` actualizados
- `tailwind.config.mjs` — token `link: { DEFAULT, hover }` → genera clases `text-link`, `text-link-hover`
- Reemplazos de `text-primary` → `text-link` en: `Header.astro` (logo hover, nav activa desktop/mobile), `Button.astro` (variantes outline y ghost), `index.astro`, `programa.astro`, `comunidad.astro`, `recursos.astro`, `eventos.astro`, `contacto.astro` (eyebrow labels y `member.role`)
- Usos **no modificados** (correcto, son decorativos): `Icon class="text-primary"` (aria-hidden), `border-primary`, `bg-primary`, `focus-visible:ring-primary`, `bg-primary/10`, gradientes del Hero

### Consecuencias
- `--color-primary` queda reservado exclusivamente para uso decorativo/superficie. No debe usarse directamente en texto legible.
- `--color-link` es el color canónico para texto interactivo. Nuevos links, eyebrow labels y roles de texto de marca deben usar `text-link`.
- Limitación conocida: en secciones con `background="dark"` (`bg-surface-dark` #1a1014), un `<a>` inline heredaría `color: var(--color-link)` (#c4317d) con contraste ~4.0:1 sobre el fondo oscuro — por debajo de WCAG AA. Mitigación: en secciones oscuras, los links inline deben sobreescribirse con `text-text-inverse underline` o evitarse; los CTAs ya usan `Button` que maneja esto correctamente.

---

## ADR-008 — Logo del Hero cortado en Chrome/Android real: mitigación sin causa raíz confirmada

**Estado:** Aceptado — Mitigado (verificado en dispositivo real). Causa raíz **no confirmada con certeza técnica**.
**Fecha:** 2026-07-03

### Contexto
Tras la Etapa 16 (logo del Hero agrandado en `src/pages/index.astro`), una usuaria reportó en su Samsung Galaxy S24 (Chrome/Android) que el logo circular aparecía cortado/desbordado en la parte inferior de la pantalla, superpuesto a la zona de la barra de navegación del sistema, en lugar de quedar contenido dentro de su sección.

### Investigación realizada

El contenedor del logo usaba `aspect-square` (`aspect-ratio: 1/1`) como única fuente de altura, con dos hijos exclusivamente `absolute inset-0` (gradiente decorativo + `<img>`) — un patrón sin ningún contenido en flujo normal del que derivar tamaño intrínseco.

Se intentó reproducir el bug con Playwright en múltiples configuraciones, todas sin éxito:
- Chromium con viewport mobile emulado (390×844, 360×780)
- WebKit real (motor Safari) con perfil `devices['iPhone 13']`
- Chromium con perfil exacto `devices['Galaxy S24']` (360×780, `deviceScaleFactor: 3`, user-agent `SM-S921U`) — la combinación motor/dispositivo más cercana posible al hardware real de la usuaria, corriendo contra el sitio en producción (no contra `astro dev`)

En todos los casos, la geometría computada (`getBoundingClientRect`, `getComputedStyle`) del contenedor y de la imagen coincidía exactamente con lo esperado, y las capturas se veían correctas. **El bug nunca se reprodujo en ningún emulador.**

Se revisaron y descartaron por inspección de código (sin evidencia de que aplicaran):
1. Elementos `position: fixed` escapando su contenedor — no existe ningún `fixed` en todo el proyecto
2. `overflow: hidden` no aplicado en algún breakpoint — la clase no tenía prefijos responsive, se aplicaba siempre
3. Unidades `vh`/`dvh`/`safe-area-inset` con comportamiento distinto en Chrome Android real — no se usa ninguna en el Hero (el único `100vh` del proyecto es `body { min-height }`, sin relación)

### Decisión

Se aplicaron dos cambios, uno detrás del otro:

**1. Reemplazo de `aspect-square` por padding-percentage (commit `9d75692`)**
Se identificó `aspect-ratio` sin contenido en flujo como un patrón CSS con fragilidad documentada en distintas versiones/builds de Chromium cuando coexiste con CSS Grid (`items-center`) y contenedores cuyos únicos hijos son absolutamente posicionados. Se reemplazó por la técnica clásica pre-`aspect-ratio`: un div hijo en flujo normal con `pt-[100%]`, que fija la altura cuadrada por matemática de box-model, sin depender del cálculo de aspect-ratio. Verificado con diff de píxeles = 0% en desktop/tablet/mobile (cambio de técnica interna, sin efecto visual).

**2. Reordenar el logo primero en mobile/tablet (commit `4941ee8`)**
Nueva pista de la usuaria: el elemento cortado era específicamente el último del documento en el layout apilado de una columna (`<lg`, es decir `<1024px`). Se agregó `order-first lg:order-none` al contenedor del logo — el logo pasa a renderizarse primero (arriba), texto/botones después, solo por debajo del breakpoint `lg` (1024px), que es donde el grid ya pasaba de 2 columnas a 1. No afecta el layout desktop (diff de píxeles = 0%).

### Resultado

La usuaria confirmó con una captura nueva de su dispositivo real que el logo se renderiza completo, sin cortes, arriba del texto — el síntoma reportado desapareció.

### Honestidad epistémica — lo que NO sabemos

**La causa raíz técnica exacta nunca fue confirmada.** No se logró reproducir el bug original en ningún emulador (Chromium, WebKit, con o sin perfil de dispositivo específico, contra dev server ni contra producción). La corrección de `aspect-square` → `pt-[100%]` es una hipótesis razonada (patrón CSS objetivamente frágil, con precedente documentado en la industria) pero nunca se pudo demostrar visualmente que resolviera algo — ninguna captura mostró diferencia antes/después en emulación. El reordenamiento (`order-first`) fue explícitamente una prueba diagnóstica además de mitigación.

Es decir: **tenemos una mitigación verificada en el dispositivo real donde ocurría el bug, pero no un diagnóstico de causa raíz verificado en un entorno controlado/reproducible.** Es posible que el fix funcione por una razón distinta a la hipotetizada (por ejemplo, simplemente porque el elemento problemático ya no es el último en el documento, independientemente de si `aspect-square` tenía algo que ver), o que ambos cambios combinados hayan sido necesarios, o que un solo cambio hubiera bastado. No hay forma de aislar cuál de los dos commits resolvió el problema sin volver a exponer a la usuaria al bug.

### Consecuencias
- Si en el futuro aparece un bug de renderizado similar (elemento cortado/desbordado) específicamente en Chrome/Android real y no reproducible en emuladores, revisar primero: (a) contenedores cuya altura depende solo de `aspect-ratio` sin contenido en flujo, preferir `pt-[<n>%]`; (b) si el elemento problemático es el último del documento en el breakpoint afectado, probar reordenarlo
- Los emuladores disponibles (Playwright Chromium/WebKit, incluso con perfiles de dispositivo específicos como `Galaxy S24`) **no son garantía de fidelidad 1:1 con hardware/browser build real** — no asumir que "no reproduce en emulador" significa "no es un bug real"
- No revertir estos dos commits (`9d75692`, `4941ee8`) sin volver a validar en un dispositivo Android real
