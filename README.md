# Inspira Mujer — Plataforma Digital Oficial

Sitio web institucional de Inspira Mujer. Construido con Astro 5, TypeScript (strictest), Tailwind CSS 3 y desplegado en GitHub Pages.

## Stack

- **Astro 5** — framework web estático
- **TypeScript** — modo strictest
- **Tailwind CSS 3** — estilos con Design Tokens
- **GitHub Actions** — CI/CD automático
- **GitHub Pages** — hosting estático
- **Dominio** — https://inspiramujer.com.ar

## Requisitos

- Node.js >= 22.12.0
- npm >= 10

## Instalación

```bash
npm install
```

## Scripts

| Comando             | Acción                                    |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Servidor de desarrollo en localhost:4321  |
| `npm run build`     | Build de producción en ./dist/            |
| `npm run preview`   | Preview del build local                   |
| `npm run check`     | Type check con astro check                |
| `npm run lint`      | Lint con ESLint                           |
| `npm run lint:fix`  | Lint con auto-corrección                  |
| `npm run format`    | Formatear con Prettier                    |

## Estructura

```
src/
├── config/       — Configuración global (site, seo, nav, social)
├── content/      — Content Collections (blog, eventos, podcast, streaming, sponsors)
├── data/         — Datos estáticos (team)
├── i18n/         — Traducciones (es-AR)
├── layouts/      — BaseLayout, PageLayout
├── lib/          — Utilidades (cn, date, fetcher)
├── pages/        — Páginas Astro
├── services/     — Adaptadores (ai, email, api, storage, automation)
├── styles/       — global.css con Design Tokens
└── types/        — Interfaces TypeScript
```

## Arquitectura

| Documento | Descripción |
| --------- | ----------- |
| [docs/ADR.md](docs/ADR.md) | Registro de decisiones de arquitectura (Architecture Decision Records) |
| [docs/architecture.mmd](docs/architecture.mmd) | Diagrama de arquitectura en formato Mermaid |
| [docs/TREE.md](docs/TREE.md) | Snapshot de la estructura de carpetas del proyecto |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Historial de cambios por etapa (Keep a Changelog) |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Estado actual, deuda técnica y próximas etapas |

## Agregar una página

1. Crear `src/pages/mi-pagina.astro`
2. Usar `PageLayout` con `resolveSeo()`

```astro
---
import PageLayout from '@/layouts/PageLayout.astro';
import { resolveSeo, buildCanonical } from '@/config';

const seo = resolveSeo({
  title: 'Mi Página',
  canonical: buildCanonical('/mi-pagina'),
});
---
<PageLayout seo={seo}>
  <h1>Mi Página</h1>
</PageLayout>
```

## Agregar contenido (blog, eventos, etc.)

1. Crear un archivo `.md` o `.mdx` en `src/content/<colección>/`
2. Completar el frontmatter según el schema de `src/content/config.ts`

## Variables de entorno

Copiar `.env.example` a `.env` y completar los valores necesarios.

## Despliegue

El deploy es automático via GitHub Actions al hacer push a `main`.

## Configuración DNS

Para usar el dominio personalizado `inspiramujer.com.ar`, agregar estos registros en el proveedor DNS:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
CNAME www  TU_USUARIO.github.io
```

Luego verificar en: GitHub Settings → Pages → Custom domain.
