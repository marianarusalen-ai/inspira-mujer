# Changelog

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
