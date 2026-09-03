# Estado de validación de la entrega

## Comprobaciones que sí se ejecutaron en este entorno

- Auditoría de contenido con `node scripts/content-audit.mjs`: superada.
- Búsqueda recursiva de los marcadores de dominio local/de ejemplo y del protocolo de extensiones de navegador prohibidos: sin coincidencias en el proyecto.
- Revisión de `package.json`: versiones exactas, sin `latest`, `*`, `^` ni `~`.
- Revisión de idioma en el contenido visible: español (`es-PE`), sin texto chino, japonés o coreano.
- `pnpm-workspace.yaml`: no existe; el proyecto es de un solo paquete.
- Configuración de dominio: un único valor `SITE` en `astro.config.mjs`; si está vacío, sitemap queda desactivado.

## Comprobaciones bloqueadas por el entorno de ejecución

La terminal de esta sesión no tiene salida DNS/red hacia `registry.npmjs.org`. El intento real de Corepack devolvió `getaddrinfo EAI_AGAIN registry.npmjs.org`. Por esa limitación externa no fue posible:

1. Descargar `pnpm@11.25.0` con Corepack.
2. Generar un `pnpm-lock.yaml` sincronizado desde el registro.
3. Ejecutar `CI=1 corepack pnpm install --frozen-lockfile`.
4. Ejecutar `pnpm check` y `pnpm build` con las dependencias instaladas.
5. Descargar desde la terminal las fotografías reales de Wikimedia Commons para convertirlas en archivos JPG locales.

Por la misma razón, este paquete no afirma que las pruebas anteriores hayan pasado. Las fotografías reales están enlazadas mediante sus URLs de Wikimedia y se documentan en `PHOTO_SOURCES.md`.

## Validación obligatoria al disponer de red

En un entorno con acceso a npm:

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
# Confirmar y conservar el pnpm-lock.yaml generado.
rm -rf node_modules
CI=1 pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm audit:content
```

Después de configurar un dominio real en `astro.config.mjs`, volver a ejecutar `pnpm build` y verificar el sitemap generado. Si `SITE` permanece vacío, el sitemap debe seguir sin generarse.

---

## Ronda 2026-09-03 (red disponible): validación real completada

En esta sesión la terminal sí tuvo acceso al registro npm y a Open-Meteo, por lo que se ejecutaron y superaron las comprobaciones que antes quedaban pendientes:

- `pnpm install`: correcto. Se añadió `pnpm-workspace.yaml` con `allowBuilds: { esbuild: true, workerd: true }` (pnpm 11 dejó de leer `onlyBuiltDependencies`) y se generó/verificó `pnpm-lock.yaml`.
- `pnpm check` (astro check sobre 15 archivos): **0 errores, 0 avisos, 0 pistas**.
- `pnpm build`: **4 páginas generadas** (`/`, `/cookies/`, `/privacidad/`, `/terminos/`) con salida limpia (exit 0). El HTML estático incluye el snapshot meteorológico real obtenido de Open-Meteo durante la compilación.
- `node scripts/content-audit.mjs`: superada (sin marcadores prohibidos).
- Consulta de ejemplo a Open-Meteo desde terminal: correcta (temperatura y código de condición devueltos).

### Cambios estructurales incluidos

1. Nueva franja «En esta guía» con accesos directos a las 11 secciones.
2. Secciones nuevas en la portada: `#cronologia`, `#historias`, `#servicios` (`Facilities.astro`) y `#clima` (`Weather.astro`).
3. `Weather.astro`: snapshot en compilación con el módulo core `node:https` (evita el fallo de salida del dispatcher de `fetch`/undici observado en Node 24.14 de Windows) + actualización en navegador con caché local de 30 min y degradación sin conexión.
4. FAQ ampliado de 6 a 8 preguntas; fuentes ampliadas a 8 tarjetas (Andina, Open-Meteo, SENAMHI).
5. Fotografías servidas como miniaturas escaladas de Wikimedia (1600/1000/1400/1100 px) + `preconnect`/`dns-prefetch` + `decoding="async"`.
6. Avisos legales: mención de Open-Meteo en privacidad y términos.

### Observaciones técnicas registradas

- Node.js local era 24.14.0; `package.json` exige 24.20.0. El intento de instalar 24.20 en este sandbox falló por bloqueo del antivirus (EPERM al renombrar), pero es el requisito para despliegue (Cloudflare/CI).
- En Node 24.14.0 para Windows, usar `fetch()` global durante la compilación (undici) provocaba un fallo de aserción de libuv al salir del proceso (`async.c:76`), pese a completar el build. Se resolvió usando `node:https` para la consulta del snapshot.
- Las fotografías siguen siendo remotas (URLs de Wikimedia); el proceso de descarga local en `public/images` queda para un entorno con acceso a `upload.wikimedia.org`.

### Pendientes (fuera del alcance de código)

- Definir el dominio real en `astro.config.mjs` (`SITE`) para habilitar canonical/sitemap.
- Revisión final de español peruano del contenido nuevo por una persona nativa/editora.
- Descarga opcional de fotos locales para independencia total de Wikimedia.

---

## Ronda 2026-09-03 (dominio + entidad SEO + PWA): completada y verificada

1. `astro.config.mjs`: `SITE = 'https://bridgeofsighslima.com'`. `pnpm build` exitoso: 4 páginas + `sitemap-index.xml` con URLs absolutas del dominio.
2. Datos oficiales actualizados en el código: maps corto, dirección (Jr. Batallón 271, 15063), código Plus VX2G+8X, rating 4,5/24.561 y embed `pb` exacto (el idioma de interfaz original del embed se sustituyó por `es` para respetar la auditoría interna y la coherencia del sitio; las coordenadas, el marcador y su etiqueta original se conservan).
3. JSON-LD `TouristAttraction`: `@id`, `image`, `hasMap`, `touristType`, `alternateName` (3 variantes), Maps dentro de `sameAs`. TDK con «(Barranco, Lima)», `og:image`/`og:image:alt` y `twitter:image:alt` con el hero real (Wikimedia 1600 px).
4. H1 con nombre oficial + ciudad; franja de presentación con jerarquía `→` y clúster de alrededores.
5. Autoridad externa: Portal de Turismo del Perú (`peru.travel`) bajo el mapa y en Fuentes.
6. PWA: `site.webmanifest` + `sw.js` + registro condicional (fuera de desarrollo local) + iconos 192/512 generados. Metas móviles/apple añadidas en `BaseLayout`.
7. Limpieza: `public/images` (≈46 MB, 4 JPG originales sin referencia en el sitio) eliminada para reducir el peso del despliegue.
8. Verificación: `pnpm check` 0 errores/avisos/pistas (16 archivos); auditoría de contenido superada; `pnpm build` exit 0; en `dist/index.html` se confirman canonical/og absolutos, manifiesto, `sw.js`, embed `es`, enlace Maps y código Plus.

### Pendientes (actualizados)

- Revisión final de español peruano por editora/editor nativo.
- Opcional: descargar y comprimir las fotos en `public/images` (guía de anchos en `PHOTO_SOURCES.md`) si se busca independencia total de Wikimedia.
- Asignar el dominio en Cloudflare (ruta/custom domain hacia el Worker desplegado).

---

## Ronda 2026-09-03 (auditoría de conformidad 85/85): completada

Auditoría reproducible creada e integrada: `scripts/compliance-audit.mjs` (`npm run audit:compliance`, debe ejecutarse tras `pnpm build`). Verifica contra `src/` y `dist/`: idioma `es-PE`, `robots` `index,follow` (portada) y `noindex,follow` (legales y 404), canonical/`og:url` absolutos por página, OG con imagen + `alt`, viewport sin `maximum-scale`, H1 único, `<img>` con `alt`, anclas y secciones visibles, FAQ visible 8 = FAQPage 8, JSON-LD parseable con `TouristAttraction`/`FAQPage`/`Organization`/`WebSite`/`WebPage`/`BreadcrumbList` e `@id` encadenados (`publisher`→organización, `WebPage.about`→atractivo, `dateModified`), PWA (`sw.js` versionado/offline a `/`, `site.webmanifest`, PNG 192/512/180 con tamaño real), sitemap absoluto sin `/404` ni `<lastmod>`, robots.txt, 404 servible, enlaces externos con `target=_blank`+`noopener`, única medición GA4 con consentimiento, ausencia de marcadores y autoría CC BY-SA 4.0 visible. Resultado: **85 verificaciones, todas superadas** (exit 0).

### Cambios incluidos en esta ronda

1. **404 real**: nuevo `src/pages/404.astro` (texto visible en español, enlace de retorno, `noindex,follow`). La compilación genera `dist/404.html` (5 páginas), que Cloudflare Workers puede servir como fallback; sitemap lo excluye automáticamente.
2. **Robots explícito**: `BaseLayout` ahora emite `<meta name="robots" content="index,follow">` por defecto y `noindex,follow` cuando la página lo solicita.
3. **E-E-A-T completo**: nueva entidad `@graph` en portada con `Organization` (`#organization`, logo `favicon.svg`), `WebSite` (`#website`, `publisher`→organización), `WebPage` (`#webpage`, `about`→atractivo, `primaryImageOfPage`, `datePublished`/`dateModified` 2026-09-03, `inLanguage es-PE`) y `BreadcrumbList` (Inicio → Puente de los Suspiros). El `description` del `TouristAttraction` se pasa al español, en coherencia con la página.
4. **Footer**: línea de revisión del contenido («Contenido revisado y actualizado por última vez el 3 de septiembre de 2026») antes del copyright.

### Decisiones registradas (no son fallos)

- El `pb` embed conserva las coordenadas, el marcador y su etiqueta original; solo la interfaz del mapa se sirve en `es` (coherencia de idioma del sitio; decisión análoga a la documentada en otros proyectos del mismo checklist).
- `wrangler.jsonc` sigue con `name = "puente-suspiros-barranco"`: para el despliegue de activos estáticos de Astro no hay binding auto-referencial (a diferencia de OpenNext), por lo que el nombre del Worker es independiente; basta con apuntar el dominio `bridgeofsighslima.com` al Worker existente en Cloudflare.
- Sin `maskable` independiente (los iconos existentes no tienen zona de seguridad de máscara); mejora opcional de PWA, no un incumplimiento.
- Sitio de una sola lengua (`es-PE`): no aplican `hreflang` ni `x-default`.
