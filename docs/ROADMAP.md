# Roadmap — Inspira Mujer

## Etapa 1 — Infraestructura base ✅
Astro 5, TypeScript strictest, Tailwind CSS 3, GitHub Pages, GitHub Actions, arquitectura limpia, Design Tokens, Content Layer, i18n, SEO base.

## Etapa 2 — Design System
Componentes UI: Button, Badge, Card, Input, Modal, Toast, Avatar, Tag. Tipografía, espaciado, grilla.

## Etapa 3 — Páginas institucionales
Home completo, El Programa, Comunidad, Recursos, Eventos (listado), Contacto con formulario.

## Etapa 4 — Blog
Listado de artículos, artículo individual, paginación, filtros por tag, RSS feed.

## Etapa 5 — Eventos
Listado, detalle de evento, registro, integración con Google Calendar.

## Etapa 6 — Podcast y Streaming
Listado de episodios, player embedido, live streaming via YouTube.

## Etapa 7 — Newsletter
Formulario de suscripción, integración con Resend, doble opt-in.

## Etapa 8 — Sponsors
Página de sponsors, badges por tier, integración con Content Layer.

## Etapa 9 — SEO avanzado
Sitemap dinámico, Open Graph por página, JSON-LD por tipo de contenido, meta tags avanzados.

## Etapa 10 — Área privada
Autenticación, perfil de usuaria, contenido exclusivo para miembros.

## Etapa 11 — Automatizaciones n8n
Contacto, newsletter, registro de eventos, notificaciones WhatsApp.

## Etapa 12 — IA
Asistente con OpenAI, resumen de contenido, clasificación de consultas.

## Etapa 13 — Tienda online
Catálogo, carrito, integración Mercado Pago.

## Etapa 14 — CRM
Gestión de contactos, seguimiento de leads, historial.

## Etapa 15 — Analytics y monitoreo
Google Analytics 4, Lighthouse CI, alertas de performance.

---

## Consideraciones Técnicas Futuras

### Migración Astro 7 + Tailwind CSS v4
- **Estado**: Pendiente de evaluación
- **Contexto**: `npm create astro` instala Astro 7 por defecto. El proyecto usa Astro 5.18.2 + Tailwind CSS 3 por compatibilidad con `@astrojs/tailwind@3`.
- **Tailwind v4** usa CSS nativo (sin wrapper de integración) y cambia la configuración radicalmente.
- **Recomendación**: Evaluar migración una vez que la arquitectura de componentes esté estabilizada (post Etapa 4).
- **Impacto**: Requiere reescribir `tailwind.config.mjs` y posiblemente ajustar `global.css`.
