# Estructura del Proyecto — Inspira Mujer

Snapshot manual. Actualizar al finalizar cada etapa.  
Última actualización: Etapa 4 — 2026-06-30.

> **Nota:** En una etapa posterior este archivo podrá generarse automáticamente mediante un script (por ejemplo `tree --gitignore -a > docs/TREE.md`). Por ahora se mantiene manualmente para conservar las anotaciones descriptivas de cada carpeta.

```
inspira-mujer/
├── .github/
│   └── workflows/
│       └── deploy.yml              ← CI/CD: check → build → deploy a GitHub Pages
├── docs/
│   ├── ADR.md                      ← Architecture Decision Records
│   ├── ARCHITECTURE.md             ← Resumen de decisiones técnicas
│   ├── CHANGELOG.md                ← Historial de cambios (Keep a Changelog)
│   ├── ROADMAP.md                  ← Etapas planificadas
│   ├── TREE.md                     ← Este archivo
│   └── architecture.mmd            ← Diagrama Mermaid de arquitectura
├── public/
│   ├── CNAME                       ← inspiramujer.com.ar
│   └── robots.txt
├── src/
│   ├── assets/                     ← Imágenes y assets procesados por Astro
│   ├── components/
│   │   ├── common/                 ← Componentes únicos de layout (una instancia por página)
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   ├── sections/               ← Bloques de contenido que componen páginas
│   │   └── ui/                     ← Átomos del design system
│   │       ├── Badge.astro
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Icon.astro
│   │       ├── Input.astro
│   │       ├── Section.astro       ← Contenedor max-width + padding
│   │       ├── Tag.astro
│   │       └── Textarea.astro
│   ├── config/                     ← Configuración estática del sitio
│   │   ├── constants.ts
│   │   ├── contact.ts
│   │   ├── index.ts                ← Re-export de todos los módulos de config/
│   │   ├── navigation.ts
│   │   ├── seo.ts
│   │   ├── site.ts
│   │   └── social.ts
│   ├── content/                    ← Content Collections (Astro Content Layer)
│   │   ├── blog/
│   │   ├── eventos/
│   │   ├── podcast/
│   │   ├── sponsors/
│   │   ├── streaming/
│   │   └── config.ts               ← Schemas Zod de cada colección
│   ├── data/                       ← Datos estáticos sin CMS
│   │   ├── index.ts
│   │   └── team.ts                 ← Equipo: Mariana, Irene, Eli
│   ├── i18n/
│   │   ├── locales/
│   │   │   └── es.ts               ← Diccionario es-AR completo
│   │   └── utils.ts                ← getTranslations, useTranslations, interpolate
│   ├── layouts/
│   │   ├── BaseLayout.astro        ← Head: SEO, OG, Twitter Cards, JSON-LD
│   │   └── PageLayout.astro        ← Wraps BaseLayout + Header + main + Footer
│   ├── lib/                        ← Utilidades puras sin dependencias de Astro
│   │   ├── cn.ts                   ← clsx/classnames helper
│   │   ├── date.ts                 ← Formateo de fechas en es-AR
│   │   ├── fetcher.ts              ← Fetch tipado con ApiResponse<T>
│   │   └── index.ts
│   ├── pages/
│   │   ├── dev/
│   │   │   └── ui-kit.astro        ← Catálogo visual de componentes (solo desarrollo)
│   │   ├── 404.astro
│   │   ├── comunidad.astro
│   │   ├── contacto.astro
│   │   ├── eventos.astro
│   │   ├── index.astro
│   │   ├── programa.astro
│   │   └── recursos.astro
│   ├── services/                   ← Adaptadores de servicios externos (Patrón Adaptador)
│   │   ├── ai/
│   │   │   ├── providers/
│   │   │   │   └── openai/         ← Futuro: cliente OpenAI
│   │   │   ├── prompts/            ← Futuro: templates de prompts
│   │   │   ├── memory/             ← Futuro: gestión de contexto/conversación
│   │   │   ├── tools/              ← Futuro: tool definitions para function calling
│   │   │   └── index.ts            ← Interfaz AIService
│   │   ├── api/
│   │   │   └── index.ts            ← apiClient genérico (get, post, patch, remove)
│   │   ├── automation/
│   │   │   └── index.ts            ← Futuro: n8n, webhooks
│   │   ├── integrations/
│   │   │   ├── calendar/           ← Futuro: Google Calendar
│   │   │   ├── email/              ← Futuro: Resend
│   │   │   └── social/             ← Futuro: Instagram, LinkedIn
│   │   └── storage/
│   │       └── index.ts            ← Futuro: S3, Cloudinary
│   ├── styles/
│   │   └── global.css              ← Design Tokens (CSS custom properties) + reset
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
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```
