# Guía del Puente de los Suspiros — Barranco, Lima

Sitio turístico independiente en español de Perú, desarrollado con Astro, Tailwind CSS y TypeScript. El proyecto es estático y está preparado para desplegarse con Cloudflare Workers Static Assets.

## Configuración del dominio

El dominio se configura una sola vez en `astro.config.mjs`, en la constante `SITE`.

- Si `SITE` está vacío, la compilación debe seguir funcionando.
- Sin `SITE`, no se genera sitemap y las etiquetas que requieren URL absoluta se omiten o usan rutas relativas.
- Con `SITE` definido, canonical, Open Graph y sitemap derivan de `Astro.site`.

## Versiones fijadas

- Astro 7.2.10
- Tailwind CSS 4.3.3
- @tailwindcss/vite 4.3.3
- @astrojs/sitemap 3.7.4
- @astrojs/check 0.9.10
- TypeScript 6.0.3
- Wrangler 4.128.0
- pnpm 11.25.0
- Node.js 24.20.0 LTS

## Comandos previstos

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm audit:content
pnpm deploy
```

## Google Analytics

La propiedad configurada es `G-HXM22WWPKP`. El script no se carga hasta que el visitante activa la categoría de análisis en `/cookies/`.

## Fuentes principales del atractivo

- Municipalidad Distrital de Barranco: ficha del Puente de los Suspiros.
- Municipalidad Distrital de Barranco: atractivos turísticos y turismo.
- MINCETUR: Inventario Nacional de Recursos Turísticos, ficha 5585.
- Wikidata: entidad Q42846429 para identificación y coordenadas.

## Fotografías

La página utiliza fotografías reales de Wikimedia Commons con atribución visible. Consulte `PHOTO_SOURCES.md` y los Términos de uso para autoría y licencias.

## Nota sobre el entorno de entrega

El entorno de ejecución utilizado para preparar este paquete no dispone de salida de red desde la terminal hacia el registro de npm ni hacia Wikimedia. Por ese motivo no fue posible generar desde la terminal un `pnpm-lock.yaml` nuevo ni descargar físicamente las fotografías en `public/images` durante esta sesión. El código usa las fotografías reales mediante sus URLs de Wikimedia Commons y conserva fuentes/licencias. Antes de una entrega de producción que exija recursos 100 % locales, deben descargarse esas imágenes, sustituirse las cuatro constantes fotográficas de `src/pages/index.astro` por rutas `/images/...` y generar el lockfile en un entorno con acceso al registro.
