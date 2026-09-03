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
