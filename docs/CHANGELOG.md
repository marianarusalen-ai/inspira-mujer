# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.
Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado semántico: [SemVer](https://semver.org/).

---

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
