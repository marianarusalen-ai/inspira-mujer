# Arquitectura — Inspira Mujer

## Decisiones técnicas

### Astro 5 + Output estático
Elegido por rendimiento máximo (Lighthouse 100), generación estática compatible con GitHub Pages y soporte nativo de Content Collections.

### TypeScript strictest
Modo más estricto disponible. Garantiza tipos sólidos, previene errores en tiempo de compilación y facilita el mantenimiento a largo plazo.

### Tailwind CSS 3 + CSS Custom Properties
Los Design Tokens se definen como CSS custom properties en `global.css`. Tailwind los consume via `tailwind.config.mjs`. Esto permite actualizar el design system sin recompilar Tailwind.

### Alias `@/` → `src/`
Configurado en `tsconfig.json` (paths) y `astro.config.mjs` (vite alias). Evita imports relativos frágiles.

### Patrón Adaptador en `services/`
Cada servicio externo (OpenAI, n8n, Resend, etc.) tiene su propio adaptador con una interfaz TypeScript. La implementación puede cambiarse sin modificar el código que la consume.

### Content Layer de Astro
Esquemas Zod tipados en `src/content/config.ts`. Colecciones: blog, eventos, podcast, streaming (type: content) y sponsors (type: data).

### i18n nativo
`es-AR` como locale por defecto sin prefijo de ruta. Diccionario en `src/i18n/locales/es.ts`. Preparado para agregar nuevos idiomas sin cambiar la arquitectura. Hoy el diccionario y `getTranslations`/`useTranslations` no se consumen (todo el copy está hardcodeado en español directamente en cada página); solo `interpolate()` se usa, en `Footer.astro`. Se mantiene como scaffolding intencional, igual que `services/`.

### SEO y JSON-LD por tipo de contenido
`resolveSeo()` (`src/config/seo.ts`) resuelve `title`, `canonical` y `ogImage` (con fallback a `SITE.defaultOgImage`, siempre como URL absoluta) para cada página. `BaseLayout.astro` expone un slot `head` que las páginas usan para inyectar JSON-LD específico sin tocar el layout: `BlogPosting` en `/recursos/[slug]`, `Event` en `/eventos/[slug]`. El resto de páginas solo emite `Organization` + `WebSite`.

### GitHub Actions CI/CD
Pipeline: checkout → setup-node → npm ci → astro check → eslint → astro build → upload artifact → deploy. Permisos mínimos necesarios. Dispara en push a `main`.
