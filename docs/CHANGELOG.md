# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.
Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado semántico: [SemVer](https://semver.org/).

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
