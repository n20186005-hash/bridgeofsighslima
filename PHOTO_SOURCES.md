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

## Localización de las fotografías (3 de septiembre de 2026)

Las cuatro imágenes se sirven ahora desde `public/images` (mismo sitio, independencia de Wikimedia):

| Posición en la portada | Archivo local | Ancho máximo | Resultado |
| --- | --- | --- | --- |
| Fondo del héroe (`og:image` y entidad JSON-LD) | `puente-suspiros-hero.jpg` | 1600 px | 0,41 MB |
| Cuerpo, recorte vertical 4:5 | `puente-suspiros-madera.jpg` | 1000 px | 0,11 MB |
| Cuerpo, recorte 16:10 | `bajada-de-banos.jpg` | 1400 px | 0,20 MB |
| Cuerpo, recorte cuadrado | `puente-ermita.jpg` | 1100 px | 0,17 MB |

Cada archivo local es una copia optimizada con `sharp` (rotación EXIF aplicada, JPEG q80 mozjpeg progresivo) del original de Wikimedia Commons listado arriba; la autoría, la página de origen y la licencia CC BY-SA 4.0 no cambian y se muestran en el pie de foto de cada imagen. Las cuatro constantes de `src/pages/index.astro` apuntan a esas rutas `/images/...` y la página ya no contacta con `upload.wikimedia.org`. El original sin comprimir de cada archivo se conserva en el historial de git por si se necesita regenerar.
