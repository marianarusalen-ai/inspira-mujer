import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://inspiramujer.com.ar',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
