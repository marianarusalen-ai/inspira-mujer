# Roadmap — Inspira Mujer

## Estado actual (2026-07-02)

**El sitio institucional está cerrado y listo para producción**, con una
salvedad: el repositorio todavía no tiene un remote de GitHub conectado
(ver "Antes de desplegar" más abajo).

La numeración de etapas de este documento originalmente no coincidió con
la ejecución real (ver `docs/CHANGELOG.md` para el historial real por
versión). Esta sección reemplaza el plan original de "Etapa 1 a 15" por el
estado real del proyecto.

### Completo
- Infraestructura: Astro 5, TypeScript strictest, Tailwind CSS 3, Design
  Tokens, Content Layer, i18n nativo (scaffolding), SEO base
- Design System: Button, Badge, Card, TeamCard, Icon, Input, Textarea, Section
- Header/Footer reales, navegación, menú mobile sin JS adicional
- 9 páginas institucionales reales: Home, Programa, Comunidad, Recursos,
  Eventos, Contacto, Privacidad, Términos, 404
- Blog (3 posts reales) y Eventos (1 evento real) con rutas de detalle
  `/recursos/[slug]` y `/eventos/[slug]`
- SEO completo: sitemap, robots.txt, Open Graph + Twitter Cards con imagen
  real, JSON-LD por tipo de contenido (Organization/WebSite, BlogPosting, Event)
- Accesibilidad WCAG AA (ADR-007) y Lighthouse 100/96/100/100 verificado
- CI/CD: GitHub Actions con check + lint + build, rama `main`

### Deshabilitado intencionalmente (no es deuda técnica, es una decisión)
- Formulario de `/contacto` y newsletter del footer — UI lista, sin lógica
  de envío. Depende de elegir proveedor (n8n, Resend, u otro) en una etapa
  futura; no se improvisó solo para cerrar esta etapa

### Deuda técnica restante
| Prioridad | Ítem |
|-----------|------|
| Media | Fotos reales del equipo — slots `image` en `TeamCard`/`Card` preparados; avatar actual = gradiente CSS |
| Baja | Contraste ~4.0:1 en links inline sobre fondo oscuro (ADR-007, mitigado, no resuelto de raíz) |
| Futura | `src/i18n/` (diccionario y `getTranslations`/`useTranslations`) sin consumir — activar si se agrega un segundo idioma |
| Futura | Colecciones `podcast`, `streaming`, `sponsors` — schema listo, sin contenido |
| Futura | `src/services/*` — interfaces placeholder por diseño (ADR-006), sin implementación real |

### Antes de desplegar (bloqueante)
1. Crear el repositorio remoto en GitHub y conectarlo (`git remote add origin ...`)
2. Push de la rama `main`
3. Habilitar GitHub Pages con el custom domain `inspiramujer.com.ar` y
   verificar los registros DNS (ver sección "Configuración DNS" en el README)
4. Confirmar que `deploy.yml` corre exitosamente en el primer push

---

## Fase 2 — Ecosistema (post sitio institucional)

Fuera del alcance de "sitio institucional". Corresponde a la plataforma
más amplia ("Business AI Platform") y no se empieza hasta que el sitio
esté desplegado y estable en producción.

- **Automatizaciones** — n8n: contacto, newsletter, registro de eventos,
  notificaciones WhatsApp
- **IA** — Asistente con OpenAI, resumen de contenido, clasificación de
  consultas (`src/services/ai/` ya tiene la interfaz preparada)
- **Podcast y Streaming** — listado de episodios, player embebido, live
  streaming vía YouTube
- **Área privada** — autenticación, perfil de usuaria, contenido exclusivo
- **Tienda online** — catálogo, carrito, Mercado Pago
- **CRM** — gestión de contactos, seguimiento de leads, historial
- **Analytics y monitoreo** — Google Analytics 4, Lighthouse CI, alertas
  de performance

---

## Consideraciones Técnicas Futuras

### Migración Astro 7 + Tailwind CSS v4
- **Estado**: Pendiente de evaluación
- **Contexto**: `npm create astro` instala Astro 7 por defecto. El proyecto usa Astro 5.18.2 + Tailwind CSS 3 por compatibilidad con `@astrojs/tailwind@3`.
- **Tailwind v4** usa CSS nativo (sin wrapper de integración) y cambia la configuración radicalmente.
- **Recomendación**: Evaluar migración recién cuando arranque la Fase 2, no antes.
- **Impacto**: Requiere reescribir `tailwind.config.mjs` y posiblemente ajustar `global.css`.
