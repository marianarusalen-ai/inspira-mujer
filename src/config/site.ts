export const SITE = {
  name: 'Inspira Mujer',
  tagline: 'Comunidad de mujeres que crean, tejen y se inspiran',
  url: 'https://inspiramujer.com.ar',
  logo: '/icons/logo-color.png',
  defaultOgImage: '/images/og-default.jpg',
  locale: 'es-AR',
  language: 'es',
  timezone: 'America/Argentina/Buenos_Aires',
  location: 'General Roca, Río Negro, Argentina',
  themeColor: '#DA599B',
  author: {
    name: 'Mariana Rusalen',
  },
  program: {
    name: 'Inspira Mujer Live',
    frequency: 'Todos los sábados',
    schedule: '17:00 hs (ARG)',
    platforms: ['YouTube', 'Instagram Live'],
    description:
      'Un espacio semanal de conversaciones, entrevistas y reflexiones para mujeres que crean, aprenden y se inspiran.',
  },
} as const;
