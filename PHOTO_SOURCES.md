# Fuentes fotográficas

Las imágenes son fotografías reales y no generadas.

1. **PUENTE DE LOS SUSPIROS.jpg** — HLaiza — CC BY-SA 4.0  
   Página: https://commons.wikimedia.org/wiki/File:PUENTE_DE_LOS_SUSPIROS.jpg  
   Archivo: https://upload.wikimedia.org/wikipedia/commons/d/d4/PUENTE_DE_LOS_SUSPIROS.jpg

2. **Puente de los Suspiros, Barranco.jpg** — Ivan Brehaut L. — CC BY-SA 4.0  
   Página: https://commons.wikimedia.org/wiki/File:Puente_de_los_Suspiros,_Barranco.jpg  
   Archivo: https://upload.wikimedia.org/wikipedia/commons/6/6a/Puente_de_los_Suspiros%2C_Barranco.jpg

3. **Bajada de Baños, Barranco.jpg** — Nina Zaitceva — CC BY-SA 4.0  
   Página: https://commons.wikimedia.org/wiki/File:Bajada_de_Ba%C3%B1os,_Barranco.jpg  
   Archivo: https://upload.wikimedia.org/wikipedia/commons/3/3d/Bajada_de_Ba%C3%B1os%2C_Barranco.jpg

4. **Puente de los Suspiros Barranco.jpg** — Herwarth Morales — CC BY-SA 4.0  
   Página: https://commons.wikimedia.org/wiki/File:Puente_de_los_Suspiros_Barranco.jpg  
   Archivo: https://upload.wikimedia.org/wikipedia/commons/6/66/Puente_de_los_Suspiros_Barranco.jpg

Al crear copias locales o adaptaciones, deben preservarse la atribución y las condiciones de las licencias correspondientes.

## Nota sobre optimización (3 de septiembre de 2026)

Para acelerar la carga, la portada no enlaza los archivos originales completos sino miniaturas escaladas por el propio servicio de Wikimedia (`/thumb/<ruta>/<ancho>px-<archivo>`):

1. Original → 1600 px (fondo del héroe).
2. Original → 1000 px (cuerpo, recorte vertical 4:5).
3. Original → 1400 px (cuerpo, recorte 16:10).
4. Original → 1100 px (cuerpo, recorte cuadrado).

Las URLs de página (autoría/licencia) no cambian. Si en el futuro se descargan copias locales, lo recomendado es replicar esos anchos máximos (1600/1000/1400/1100 px) y apuntar las cuatro constantes de `src/pages/index.astro` a `/images/...`, conservando los mismos nombres lógicos y atribuciones.

## Actualización (3 de septiembre de 2026)

Las copias locales sin comprimir que existían en `public/images` (≈46 MB en total) fueron eliminadas porque el sitio no las referenciaba y encarecían el despliegue. La imagen de portada se sirve como miniatura 1600 px desde Wikimedia y también es la usada en `og:image`/`twitter:image` y en la entidad JSON-LD. Para lograr independencia total de Wikimedia en el futuro: descargar los 4 archivos originales, comprimirlos a los anchos indicados arriba, guardarlos en `public/images` con los nombres lógicos actuales y cambiar las cuatro constantes de `src/pages/index.astro` a rutas locales; conviene además revisar los avisos de privacidad que mencionan el alojamiento externo.
