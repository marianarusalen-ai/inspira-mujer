# Estructura del Proyecto — Inspira Mujer

Snapshot manual. Actualizar al finalizar cada etapa.
Última actualización: cierre del sitio institucional — 2026-07-02.

> **Nota:** En una etapa posterior este archivo podrá generarse automáticamente mediante un script (por ejemplo `tree --gitignore -a > docs/TREE.md`). Por ahora se mantiene manualmente para conservar las anotaciones descriptivas de cada carpeta.

```
inspira-mujer/
├── .github/
│   └── workflows/
│       └── deploy.yml              ← CI/CD: check → lint → build → deploy a GitHub Pages
├── docs/
│   ├── ADR.md                      ← Architecture Decision Records
│   ├── ARCHITECTURE.md             ← Resumen de decisiones técnicas
│   ├── CHANGELOG.md                ← Historial de cambios (Keep a Changelog)
│   ├── ROADMAP.md                  ← Etapas planificadas
│   ├── TREE.md                     ← Este archivo
│   └── architecture.mmd            ← Diagrama Mermaid de arquitectura
├── public/
│   ├── CNAME                       ← inspiramujer.com.ar
│   ├── robots.txt                  ← Referencia a sitemap-index.xml
│   ├── icons/
│   │   ├── apple-touch-icon.png    ← 180×180, enlazado en BaseLayout
│   │   ├── favicon.png             ← 256×256, isotipo recortado del logo
│   │   ├── logo-color.png          ← Logo header (h-9), SITE.logo
│   │   └── sprite.svg              ← Sprite SVG para componente Icon
│   └── images/
│       ├── logo-circular.png       ← Logo en canvas cuadrado, fuente del recorte del favicon
│       └── og-default.jpg          ← 1200×630, SITE.defaultOgImage (fallback Open Graph)
├── src/
│   ├── assets/                     ← Imágenes y assets procesados por Astro (vacío por ahora)
│   ├── components/
│   │   ├── common/                 ← Componentes únicos de layout (una instancia por página)
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   ├── sections/                ← Bloques de contenido que componen páginas (vacío por ahora)
│   │   └── ui/                     ← Átomos del design system
│   │       ├── Badge.astro
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Icon.astro
│   │       ├── Input.astro
│   │       ├── Section.astro       ← Contenedor max-width + padding
│   │       ├── TeamCard.astro      ← Tarjeta de integrante de equipo (name/role/bio/avatar)
│   │       └── Textarea.astro
│   ├── config/                     ← Configuración estática del sitio
│   │   ├── constants.ts
│   │   ├── contact.ts
│   │   ├── index.ts                ← Re-export de todos los módulos de config/
│   │   ├── navigation.ts
│   │   ├── seo.ts                  ← buildTitle, buildCanonical, resolveSeo (con fallback OG image)
│   │   ├── site.ts                 ← SITE.defaultOgImage, SITE.logo, SITE.program, etc.
│   │   └── social.ts
│   ├── content/                    ← Content Collections (Astro Content Layer)
│   │   ├── blog/                   ← 3 posts reales
│   │   ├── eventos/                ← 1 evento real (Expo Inspira Teje, jul 2026)
│   │   ├── podcast/                ← Schema listo, sin contenido
│   │   ├── sponsors/                ← Schema listo, sin contenido
│   │   ├── streaming/               ← Schema listo, sin contenido
│   │   └── config.ts               ← Schemas Zod de cada colección
│   ├── data/                       ← Datos estáticos sin CMS
│   │   ├── index.ts
│   │   └── team.ts                 ← Equipo: Mariana, Irene, Eli
│   ├── i18n/                       ← Infraestructura lista, no consumida en runtime todavía (salvo `interpolate`)
│   │   ├── locales/
│   │   │   └── es.ts               ← Diccionario es-AR completo
│   │   └── utils.ts                ← getTranslations, useTranslations, interpolate
│   ├── layouts/
│   │   ├── BaseLayout.astro        ← Head: SEO, OG, Twitter Cards, JSON-LD (Organization/WebSite + slot head)
│   │   └── PageLayout.astro        ← Wraps BaseLayout + Header + main + Footer
│   ├── lib/                        ← Utilidades puras sin dependencias de Astro
│   │   ├── cn.ts                   ← clsx/classnames helper
│   │   ├── date.ts                 ← Formateo de fechas en es-AR
│   │   ├── fetcher.ts              ← Fetch tipado con ApiResponse<T>
│   │   └── index.ts
│   ├── pages/
│   │   ├── eventos/
│   │   │   └── [slug].astro        ← Detalle de evento + JSON-LD Event
│   │   ├── recursos/
│   │   │   └── [slug].astro        ← Detalle de post + JSON-LD BlogPosting
│   │   ├── 404.astro
│   │   ├── comunidad.astro
│   │   ├── contacto.astro          ← Formulario deshabilitado visualmente ("Muy pronto")
│   │   ├── eventos.astro
│   │   ├── index.astro
│   │   ├── privacidad.astro        ← Política de Privacidad (contenido real)
│   │   ├── programa.astro
│   │   ├── recursos.astro
│   │   └── terminos.astro          ← Términos de Uso (contenido real)
│   ├── services/                   ← Adaptadores de servicios externos (Patrón Adaptador, placeholders por diseño — ADR-006)
│   │   ├── ai/
│   │   │   ├── providers/
│   │   │   │   └── openai/         ← Futuro: cliente OpenAI
│   │   │   ├── prompts/            ← Futuro: templates de prompts
│   │   │   ├── memory/             ← Futuro: gestión de contexto/conversación
│   │   │   ├── tools/              ← Futuro: tool definitions para function calling
│   │   │   └── index.ts            ← Interfaz AIService
│   │   ├── api/
│   │   │   └── index.ts            ← apiClient genérico (get, post, patch, remove) — usa src/lib/fetcher.ts
│   │   ├── automation/
│   │   │   └── index.ts            ← Futuro: n8n, webhooks (contacto y newsletter dependen de esto)
│   │   ├── integrations/
│   │   │   ├── calendar/           ← Futuro: Google Calendar
│   │   │   ├── email/              ← Futuro: Resend
│   │   │   └── social/             ← Futuro: Instagram, LinkedIn
│   │   └── storage/
│   │       └── index.ts            ← Futuro: S3, Cloudinary
│   ├── styles/
│   │   └── global.css              ← Design Tokens (CSS custom properties) + reset + .post-body
│   └── types/
│       └── index.ts                ← Interfaces TypeScript globales del proyecto
├── .env.example                    ← Variables de entorno documentadas (sin valores)
├── .gitattributes
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── astro.config.mjs
├── eslint.config.mjs
├── package.json                    ← version 1.0.0 — sitio institucional cerrado
├── tailwind.config.mjs
└── tsconfig.json
```
