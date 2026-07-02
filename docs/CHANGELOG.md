# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.
Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado semántico: [SemVer](https://semver.org/).

---

## [1.0.0] — 2026-07-02

Cierre del sitio institucional. Listo para producción (pendiente de conectar
el remote de GitHub — ver `docs/ROADMAP.md`).

### Agregado
- `/privacidad` y `/terminos` — páginas reales (Política de Privacidad,
  Términos de Uso) con contenido propio para una organización argentina;
  resuelven los links del footer que antes apuntaban a rutas inexistentes
- `TeamCard.astro` — componente `ui/` que reemplaza el bloque de tarjeta de
  equipo duplicado entre `index.astro` y `programa.astro`
- Paso `Lint` en `deploy.yml`, entre `check` y `build`

### Modificado
- Formulario de `/contacto` y newsletter del footer: deshabilitados
  visualmente (`disabled` + texto "Muy pronto") hasta definir el proveedor
  de envío real (n8n, Resend, u otro) en una etapa futura
- `deploy.yml` — `node-version` alineado a 22 (coincide con
  `engines.node` de `package.json`, antes apuntaba a 20)
- Rama principal renombrada de `master` a `main` (coincide con el trigger
  `branches: [main]` de `deploy.yml`, que nunca se hubiera disparado)
- `favicon.png` — recortado al isotipo (antes era el lockup completo con
  wordmark a 2174×2648 px, ilegible a tamaño de pestaña); ahora 256×256 px,
  16 KB (antes 61.9 KB)

### Eliminado
- `public/favicon.ico` y `public/favicon.svg` — archivos huérfanos, sin
  ninguna referencia en el código (`BaseLayout` solo usa `/icons/favicon.png`)
- `src/components/ui/Tag.astro` — componente sin ningún uso en el proyecto

---

## [0.12.0] — 2026-07-01

### Agregado
- JSON-LD `BlogPosting` (posts de `/recursos/[slug]`) y `Event`
  (`/eventos/[slug]`) inyectados vía el slot `head` de `PageLayout`
- `apple-touch-icon.png` (180×180) enlazado en `BaseLayout`

### Verificado
- Auditoría Lighthouse real (Home y un post): 100 Performance / 96
  Accessibility / 100 Best Practices / 100 SEO. Core Web Vitals en rango
  "Good" (LCP 1.7s, CLS 0, TBT ≤60ms)
- Sitemap y `robots.txt` coherentes con las páginas reales generadas

## [0.11.0] — 2026-07-01

### Agregado
- `SITE.defaultOgImage` + `og-default.jpg` (1200×630) — Open Graph e imagen
  por defecto en todas las páginas, resuelto como URL absoluta en `resolveSeo()`

## [0.10.0] — 2026-06-30

### Agregado
- Content Layer real: 3 posts en `src/content/blog/`, 1 evento real
  (Expo Inspira Teje, jul 2026) en `src/content/eventos/`
- Rutas de detalle `/recursos/[slug]` y `/eventos/[slug]`
- Estilos `.post-body` para contenido renderizado desde Markdown

## [0.9.0] — 2026-06-30

### Agregado
- Logo real en el header (`SITE.logo`, `logo-color.png`), favicon activo
- JSON-LD Organization actualizado con el logo real

## [0.8.0] — 2026-06-30

### Corregido
- Contraste WCAG AA del skip link
- Focus trap en el menú mobile
- Eliminado `src/pages/dev/ui-kit.astro` (catálogo de desarrollo, ya no necesario)

## [0.7.0] — 2026-06-30

### Agregado
- ADR-007 implementado: token `--color-link` (#c4317d) separado de
  `--color-primary`, para no comprometer el contraste de texto/links con el
  color de marca. 10 combinaciones verificadas WCAG AA

## [0.6.0] — 2026-06-30

### Agregado
- Home completa con fix de contraste WCAG AA en `Button` variantes `primary`
  y `outline`

## [0.5.0] — 2026-06-30

### Agregado
- `/programa` — contenido real: descripción de Inspira Mujer Live (`SITE.program.*`), sección "Cómo participar" con Cards Cuándo/Dónde, grid FEATURED_TEAM con bio opcional, CTA a `/comunidad`
- `/comunidad` — contenido real: texto editorial de tejido/macramé/crochet, 3 pilares (Crear, Compartir, Inspirar), sección de redes sociales con `Icon` y links tipados de `SOCIAL`, CTA a `/contacto`
- `/recursos` — placeholder con CTAs a `SOCIAL.instagram` y `SOCIAL.youtube`; punto de extensión para `src/content/blog/`
- `/eventos` — placeholder expandido con tipos de eventos (Talleres, Clases, Encuentros), CTA a `/contacto`; punto de extensión para `src/content/eventos/`
- `/contacto` — formulario UI (nombre, email, mensaje) con `Input`/`Textarea`, info de contacto con `CONTACT.email` y `CONTACT.location`, columna de respuesta estimada; integración con `automationService.triggerContact()` documentada como pending

---

## [0.4.0] — 2026-06-30

### Agregado
- Home completa con 5 secciones en `src/pages/index.astro`
- Sección Hero: `h1` con tagline de `SITE`, texto descriptivo, CTAs primario y secundario, composición geométrica con Design Tokens (sin imágenes)
- Sección El Programa: nombre, descripción, frecuencia, horario y plataformas de `SITE.program` con `Badge`
- Sección Equipo: grid responsive 1→2→3 columnas, `Card` con avatar circular para cada integrante de `FEATURED_TEAM`
- Sección Comunidad CTA: fondo oscuro con `Badge` y `Button` hacia `/comunidad`
- Sección Eventos: `Card` placeholder "Próximamente" con punto de extensión documentado para `map(events)`
- `SITE.program` en `src/config/site.ts` — nombre, frecuencia, horario, plataformas y descripción del programa en vivo

### Modificado
- `Button.astro` — variante `primary`: `text-text-inverse` → `text-text` + `hover:bg-primary-dark` → `hover:bg-primary-light` para alcanzar contraste WCAG AA 4.5:1 (de 3.34:1 a 5.77:1)
- `Button.astro` — variante `outline`, estado hover: `hover:text-text-inverse` → `hover:text-text` para alcanzar contraste WCAG AA 4.5:1 (de 3.34:1 a 5.77:1)

---

## [0.3.0] — 2026-06-29

### Agregado
- `Section.astro` — contenedor responsive con max-width y padding horizontal
- `Header.astro` extraído como componente en `src/components/common/`
- `Footer.astro` extraído como componente en `src/components/common/`
- Header sticky con fondo semi-transparente y blur en scroll
- Navegación principal con `aria-current="page"` dinámico
- Helper `isActive()` para detección de enlace activo por ruta
- Menú mobile con `<details>/<summary>` sin JavaScript adicional
- Slot `cta` en Header para botón de llamada a la acción intercambiable por página
- Footer con 4 columnas: marca, comunidad, programa, contacto
- Restauración de foco al botón hamburguesa al cerrar menú (Escape y clic exterior)

### Modificado
- `PageLayout.astro` — Header y Footer delegados a sus componentes dedicados

---

## [0.2.0] — 2026-06-29

### Agregado
- `Button.astro` — variantes `primary`, `secondary`, `ghost`, `outline`; tamaños `sm`, `md`, `lg`
- `Badge.astro` — variantes de color y tamaño, accesible
- `Card.astro` — contenedor con borde, sombra y radio configurables
- `Icon.astro` — wrapper SVG con control de tamaño y atributo `aria-hidden` automático
- `Tag.astro` — etiqueta inline para categorías y metadatos
- `Input.astro` — campo de texto con label, mensaje de error y texto de ayuda
- `Textarea.astro` — área de texto con las mismas props que `Input`
- Página `/dev/ui-kit` — catálogo visual de todos los componentes UI (solo entorno de desarrollo)

---

## [0.1.0] — 2026-06-29

### Agregado
- Scaffold Astro 5 con TypeScript strictest
- Tailwind CSS 3 con Design Tokens via CSS custom properties
- `@astrojs/sitemap` para generación de sitemap
- `@astrojs/check` para type checking de archivos `.astro`
- ESLint Flat Config con eslint-plugin-astro, typescript-eslint, jsx-a11y, prettier
- Prettier con prettier-plugin-astro
- Estructura de carpetas completa según arquitectura limpia
- `src/config/` — site, seo, navigation, social, contact, constants
- `src/types/` — interfaces completas: SeoProps, NavItem, SocialLinks, TeamMember, Event, Sponsor, etc.
- `src/lib/` — cn, date (es-AR), fetcher tipado
- `src/i18n/` — diccionario completo es-AR, getTranslations, useTranslations, interpolate
- `src/data/team.ts` — Mariana Rusalen, Irene, Eli
- `src/content/config.ts` — Content Layer: blog, eventos, podcast, streaming, sponsors
- `src/services/` — adaptadores placeholder para AI, automation, email, social, calendar, api, storage
- `src/layouts/BaseLayout.astro` — head completo con SEO, Open Graph, Twitter Cards, JSON-LD
- `src/layouts/PageLayout.astro` — header, main, footer con roles ARIA
- 7 páginas Astro: index, programa, comunidad, recursos, eventos, contacto, 404
- Skip link de accesibilidad
- Custom scrollbar
- Reduced motion media query
- `public/CNAME` — inspiramujer.com.ar
- `public/robots.txt` con referencia a sitemap
- `.github/workflows/deploy.yml` — CI/CD completo con GitHub Actions
- `.env.example` con todas las variables de entorno futuras
- Alias `@/` → `src/` via tsconfig paths + vite alias
- `git init` + commit inicial
