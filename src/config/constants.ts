export const PAGINATION = {
  PAGE_SIZE: 9,
  MAX_PAGES: 100,
} as const;

export const DATE_FORMAT = {
  FULL: 'es-AR',
  SHORT: 'es-AR',
  ISO: 'YYYY-MM-DD',
} as const;

export const IMAGE = {
  OG_WIDTH: 1200,
  OG_HEIGHT: 630,
  THUMB_WIDTH: 400,
  THUMB_HEIGHT: 300,
  QUALITY: 80,
} as const;

export const PATHS = {
  BLOG: '/blog',
  EVENTOS: '/eventos',
  PODCAST: '/podcast',
  STREAMING: '/streaming',
  SPONSORS: '/sponsors',
  COMUNIDAD: '/comunidad',
  RECURSOS: '/recursos',
} as const;

export const CACHE = {
  TTL_SHORT: 60,
  TTL_MEDIUM: 3600,
  TTL_LONG: 86400,
} as const;
