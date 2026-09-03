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

## Actualización de contenido (3 de septiembre de 2026)

Ronda de profundización y rendimiento realizada sobre la estructura existente, sin eliminar contenido previo:

- **Índice rápido**: nueva franja de accesos directos bajo los datos rápidos (`En esta guía`) con anclas a las 11 secciones.
- **Cronología** (`#cronologia`): 7 hitos con fuentes (1876 inauguración y dimensiones 44 × 3 × 8,5 m; 1881 Guerra del Pacífico; 1960 vals de Chabuca Granda; 1973 y 1989 declaraciones patrimoniales; 2014 restauración con huayruro y LED; 2026 reapertura).
- **Historias y leyendas** (`#historias`): 6 tarjetas con etiquetas de tipo (tradición local, música, curiosidad, contexto, herencia), separando explícitamente leyendas de hechos documentados.
- **Servicios y comodidades** (`#servicios`, componente `Facilities.astro`): 8 categorías sin marcas — baños públicos, estacionamiento, restaurantes y cafeterías, alojamiento, mercados y tiendas, combustible y carga eléctrica, cajeros, farmacias y salud — con nota de neutralidad.
- **Clima y mejor época** (`#clima`, componente `Weather.astro`): guía estática del clima de Lima + panel de pronóstico con Open-Meteo (sin clave). En compilación se obtiene un snapshot desde el servidor (módulo core `node:https`, ajeno al dispatcher de `fetch`) y el navegador actualiza con caché local de 30 minutos. Iconos SVG propios y degradado elegante sin fallback visual cuando no hay conexión.
- **FAQ**: de 6 a 8 preguntas (baños públicos y mejor época), sincronizadas con el FAQPage JSON-LD.
- **Fuentes** (`#fuentes`): se añaden Andina, Open-Meteo y SENAMHI a las 5 fuentes previas.
- **Rendimiento de imágenes**: las cuatro fotos se sirven como miniaturas redimensionadas de Wikimedia (1600/1000/1400/1100 px en lugar de los originales completos) con `decoding="async"`, más `preconnect`/`dns-prefetch` a `upload.wikimedia.org`. El héroe deja de usar `fetchpriority` (se eliminó el atributo que generaba ruido de tipos).
- **Avisos legales**: mención de Open-Meteo en `privacidad` (terceros) y en `terminos` (pronóstico como dato de terceros).
- **pnpm 11**: `pnpm-workspace.yaml` con `allowBuilds: esbuild/workerd` (la clave `onlyBuiltDependencies` quedó obsoleta en pnpm 11) y `pnpm-lock.yaml` generado y verificado.

### Estructura actual de la portada

`Hero → aviso de reapertura → datos rápidos → índice → historia → cronología → historias y leyendas → visita → servicios → cómo llegar (mapa) → clima → alrededores → gastronomía → fuentes → preguntas frecuentes`.

### Notas de ejecución verificadas

- `pnpm install`, `pnpm check` (0 errores/avisos) y `pnpm build` (4 páginas, salida limpia) ejecutados con éxito con Node.js 24.14 local; las `engines` exigen 24.20.0 para despliegue.
- Durante la compilación el snapshot meteorológico se obtiene realmente desde Open-Meteo (temperatura y previsión de 7 días presentes en el HTML estático).

## Ronda final: dominio real, entidad SEO y PWA (3 de septiembre de 2026)

- **Dominio**: `bridgeofsighslima.com` configurado como `SITE` en `astro.config.mjs` (canonical, Open Graph y sitemap absolutos activos). Sitemap integrado: `dist/sitemap-index.xml` con 4 URLs absolutas. `public/robots.txt` apunta al sitemap.
- **Datos oficiales actualizados**: Google Maps `https://maps.app.goo.gl/JtXw9jp7DcAQgdRu5`, dirección Jr. Batallón 271, Barranco 15063, código Plus VX2G+8X y valoración 4,5 (24.561). El mapa incrustado usa el enlace `pb` exacto facilitado, con idioma de interfaz `es` para mantener la coherencia del sitio.
- **Entidad JSON-LD** (`TouristAttraction`): se añaden `@id`, `image` (hero en Wikimedia), `hasMap`, `touristType`, `alternateName` en tres variantes (español de Barranco, forma con paréntesis e inglés) y el enlace de Maps dentro de `sameAs`.
- **TDK/OG**: título «Puente de los Suspiros (Barranco, Lima) — Guía de visita y ubicación», descripción con historia/cómo llegar/mapa y alrededores; `og:image` = hero real en Wikimedia 1600 px + `og:image:alt` + `twitter:image:alt`.
- **H1**: ahora declara el nombre oficial y la ciudad: *Puente de los Suspiros* + «Barranco · Lima · Perú».
- **Semántica en el cuerpo**: nueva franja de presentación con jerarquía visible `Puente de los Suspiros → Barranco → Lima → Perú`, párrafo de identidad del lugar y clúster de alrededores (Ermita, Parque Municipal, Bajada de Baños, Plazuela Chabuca Granda) con enlace directo al mapa.
- **Autoridad externa**: Portal Oficial de Turismo del Perú (`peru.travel`) añadido bajo el mapa y en Fuentes (9 fichas).
- **PWA**: `public/site.webmanifest`, Service Worker `public/sw.js` (network-first para navegación con respaldo offline al inicio, cache-first para el resto de recursos de primer origen) y registrador en `BaseLayout` (desactivado en desarrollo local). Iconos `icon-192.png` e `icon-512.png` generados desde el icono de 180 px existente. Se añaden metas `application-name`, `mobile-web-app-capable`, `apple-mobile-web-app-*` y enlace `rel="manifest"`.
- **Limpieza**: se eliminaron 4 copias locales sin uso en `public/images` (≈46 MB, imágenes completas que el sitio no referenciaba y que encarecían cada despliegue). El contenido visual se sirve con miniaturas escaladas de Wikimedia; el proceso de descarga local queda documentado en `PHOTO_SOURCES.md`.
