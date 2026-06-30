# Servicios de IA — Inspira Mujer

Capa de integración con modelos de lenguaje y herramientas de IA.
Toda la lógica de IA vive aquí, desacoplada del frontend.

La implementación real se añadirá en la Etapa 12 del roadmap.

## Estructura

```
ai/
├── providers/
│   └── openai/     ← Cliente y configuración del SDK de OpenAI
├── prompts/        ← Templates de prompts reutilizables
├── memory/         ← Gestión de contexto y historial de conversación
├── tools/          ← Definiciones de tools para function calling
└── index.ts        ← Interfaz AIService (contrato público de este módulo)
```

## Directorios

### `providers/openai/`
Adaptador para la API de OpenAI. Encapsula la inicialización del cliente,
manejo de errores y reintentos. Si en el futuro se cambia de proveedor
(Anthropic, Mistral, etc.), solo cambia este directorio.

### `prompts/`
Templates de prompts parametrizados. Centralizar los prompts aquí evita
que queden dispersos por el código y facilita su versionado y ajuste.

### `memory/`
Gestión del contexto de conversación. Incluirá estrategias de resumen,
sliding window y persistencia de historial para mantener coherencia
en interacciones largas.

### `tools/`
Definiciones de tools (function calling) que el modelo puede invocar.
Cada tool describe su nombre, descripción y schema de parámetros en
formato compatible con la API de OpenAI.

## Principio de diseño

El resto del proyecto depende únicamente de la interfaz `AIService` definida
en `index.ts`. Ningún componente o página importa directamente desde
`providers/`, `prompts/`, `memory/` o `tools/`.
