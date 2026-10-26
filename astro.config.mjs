// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Configuración de i18n: 'es' (predeterminado, sin prefijo) y 'en' (prefijo /en/).
export default defineConfig({
  site: 'https://bridgeofsighslima.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PE',
          en: 'en'
        }
      },
      filter: (page) => ! /\/(?:404|cookies|privacidad|terminos)\/?$/.test(new URL(page).pathname)
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
