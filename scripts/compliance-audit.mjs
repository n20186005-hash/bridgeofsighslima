// Auditoría de conformidad reproducible (ejecutar después de `pnpm build`).
// Verifica con evidencia de código los puntos del checklist compartido:
// idioma/lang, robots index|noindex, canonical/OG absolutos, Open Graph con
// imagen y alt, viewport, H1 único, alt de imágenes, JSON-LD (entidad + E-E-A-T
// + FAQPage), Service Worker, manifest/PWA, sitemap, 404, enlaces externos,
// analítica con consentimiento, ausencia de marcadores y fuente única.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const html = (p) => fs.readFileSync(path.join(root, 'dist', p), 'utf8');
const src = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const DOMAIN = 'https://bridgeofsighslima.com';

const checks = [];
const check = (name, ok, detalle = '') =>
  checks.push({ name, ok: Boolean(ok), detalle: String(detalle) });

// ---- fuente (src) ----------------------------------------------------------
const base = src('src/layouts/BaseLayout.astro');
const index = html('index.html');
const cookies = html('cookies/index.html');
const privacidad = html('privacidad/index.html');
const terminos = html('terminos/index.html');
const page404 = html('404.html');

check('html lang=es-PE', /<html lang="es-PE">/.test(index));
check('robots index,follow en portada', /name="robots" content="index,follow"/.test(index));
check('robots noindex,follow en 404', /name="robots" content="noindex,follow"/.test(page404));
for (const [n, f] of [['cookies', cookies], ['privacidad', privacidad], ['terminos', terminos]]) {
  check(`robots noindex,follow en ${n}`, /name="robots" content="noindex,follow"/.test(f));
}

const canonical = (h) => { const m = h.match(/<link rel="canonical" href="([^"]+)"/); return m ? m[1] : ''; };
for (const [n, f] of [['/', index], ['/cookies/', cookies], ['/privacidad/', privacidad], ['/terminos/', terminos]]) {
  const esperado = DOMAIN + (n === '/' ? '/' : n);
  check(`canonical absoluto ${n}`, canonical(f) === esperado, canonical(f));
  const og = (f.match(/property="og:url" content="([^"]+)"/) || [])[1];
  check(`og:url coincide ${n}`, Boolean(og) && og === esperado, og);
}

check('og:image absoluta y local', index.includes('property="og:image" content="'+DOMAIN+'/images/puente-suspiros-hero.jpg"'));
check('og:image:alt presente', /property="og:image:alt" content="[^"]+"/.test(index));
check('twitter:image:alt presente', /name="twitter:image:alt" content="[^"]+"/.test(index));
check('og:locale es_PE', /property="og:locale" content="es_PE"/.test(index));
check('viewport sin maximum-scale', /name="viewport" content="width=device-width"/.test(index) && !/maximum-scale/.test(index));
check('title descripción presentes', /<title>[^<]+<\/title>/.test(index) && /name="description" content="[^"]+"/.test(index));

// ---- HTML de portada -------------------------------------------------------
const h1s = index.match(/<h1[\s>]/g) || [];
check('un solo H1 en portada', h1s.length === 1, h1s.length);
const imgs = index.match(/<img\b[^>]*>/g) || [];
const imgsNoAlt = imgs.filter((t) => !/alt="[^"]+"/.test(t) && !/alt=""/.test(t));
check('todas las <img> con alt', imgsNoAlt.length === 0, `${imgs.length} img, ${imgsNoAlt.length} sin alt`);

for (const id of ['historia', 'cronologia', 'historias', 'visita', 'servicios', 'como-llegar', 'clima', 'alrededores', 'gastronomia', 'fuentes', 'preguntas']) {
  check(`sección visible #${id}`, new RegExp(`id="${id}"`).test(index));
}
for (const id of ['historia', 'visita', 'como-llegar', 'alrededores', 'preguntas']) {
  check(`ancla de navegación #${id}`, new RegExp(`href="/#${id}"`).test(index));
}
const faqVisible = (index.match(/<details /g) || []).length;
check('FAQ visible no vacía', faqVisible > 0, faqVisible);

// ---- JSON-LD de portada ----------------------------------------------------
const ld = [...index.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
  .filter(Boolean);
check('JSON-LD presente y parseable', ld.length >= 3, `${ld.length} bloques`);
const tiposDe = (b) => (Array.isArray(b['@graph']) ? b['@graph'] : [b]).map((x) => x['@type']);
const types = new Set(ld.flatMap(tiposDe).flat());
for (const t of ['TouristAttraction', 'FAQPage', 'Organization', 'WebSite', 'WebPage', 'BreadcrumbList']) {
  check(`tipo JSON-LD ${t}`, types.has(t));
}
const org = ld.flatMap((b) => b['@graph'] || [b]).find((x) => x['@type'] === 'Organization');
const site = ld.flatMap((b) => b['@graph'] || [b]).find((x) => x['@type'] === 'WebSite');
const page = ld.flatMap((b) => b['@graph'] || [b]).find((x) => x['@type'] === 'WebPage');
const place = ld.flatMap((b) => b['@graph'] || [b]).find((x) => Array.isArray(x['@type']) ? x['@type'].includes('TouristAttraction') : x['@type'] === 'TouristAttraction');
const faq = ld.find((b) => b['@type'] === 'FAQPage');
check('publisher refiere a Organization', site && org && site.publisher && site.publisher['@id'] === org['@id']);
check('WebPage about refiere al atractivo', page && place && page.about && page.about['@id'] === place['@id']);
check('WebPage con dateModified', page && /^\d{4}-\d{2}-\d{2}$/.test(page.dateModified || ''));
check('entidad con geo', place && place.geo && Math.abs(place.geo.latitude + 12.1491) < 0.01 && Math.abs(place.geo.longitude + 77.0226) < 0.01);
check('entidad con hasMap', place && place.hasMap === 'https://maps.app.goo.gl/JtXw9jp7DcAQgdRu5');
check('entidad sin calificación propia', place && !('aggregateRating' in place));
check('entidad sin horario operativo no verificado', place && !('openingHoursSpecification' in place));
const imgsPlace = Array.isArray(place?.image) ? place.image : [place?.image];
check('entidad con imagen local existente', imgsPlace.includes(DOMAIN+'/images/puente-suspiros-hero.jpg') && exists('public/images/puente-suspiros-hero.jpg'));
check('entidad con NAP', place && place.address && place.address.postalCode === '15063' && place.address.addressCountry === 'PE');
check('FAQPage coincide con preguntas visibles', faq && Array.isArray(faq.mainEntity) && faq.mainEntity.length === faqVisible && faqVisible > 0);

// ---- PWA / service worker --------------------------------------------------
const sw = src('public/sw.js');
check('SW con caché versionada', /const CACHE = 'puente-suspiros-v2-2026-10-25'/.test(sw));
check('SW mismo origen', /url.origin !== self.location.origin/.test(sw));
check('SW conserva página correcta o error offline', sw.includes('caches.match(req)') && sw.includes('status:503') && !sw.includes("hit || caches.match('/')"));
const manifest = JSON.parse(src('public/site.webmanifest'));
check('manifest lang es-PE start_url /', manifest.lang === 'es-PE' && manifest.start_url === '/');
check('manifest theme_color', manifest.theme_color === '#6e2430');
const pngSize = (p) => {
  const b = fs.readFileSync(path.join(root, 'public', p));
  return `${b.readUInt32BE(16)}x${b.readUInt32BE(20)}`;
};
check('icon-192.png 192x192', pngSize('icon-192.png') === '192x192');
check('icon-512.png 512x512', pngSize('icon-512.png') === '512x512');
check('apple-touch-icon 180x180', pngSize('apple-touch-icon.png') === '180x180');
for (const f of manifest.icons) check(`manifest icon ${f.src} existe`, exists('public' + f.src));

// ---- sitemap / robots / 404 -------------------------------------------------
const sitemap = exists('dist/sitemap-0.xml') ? fs.readFileSync(path.join(root, 'dist', 'sitemap-0.xml'), 'utf8') : '';
check('sitemap con URLs absolutas', sitemap.includes('<loc>' + DOMAIN + '/</loc>'));
check('sitemap excluye 404', !sitemap.includes('/404'));
check('sitemap sin <lastmod>', !/<lastmod>/.test(sitemap));
const robots = fs.readFileSync(path.join(root, 'dist', 'robots.txt'), 'utf8');
check('robots.txt Allow y sitemap', robots.includes('Allow: /') && robots.includes('Sitemap: ' + DOMAIN + '/sitemap-index.xml'));
check('404.html servible (presente en dist)', exists('dist/404.html'));
check('404 visible con enlace a inicio', /Volver a la guía/.test(page404));

// ---- enlaces externos --------------------------------------------------------
const as = [...index.matchAll(/<a\b[^>]*>/g)].map((m) => m[0]);
const externos = as.filter((a) => /href="https?:\/\//.test(a) && !a.includes(DOMAIN) && !a.includes('upload.wikimedia.org') && !a.includes('open-meteo.com'));
const sinNoopener = externos.filter((a) => !/target="_blank"/.test(a) || !/rel="[^"]*noopener/.test(a));
check('enlaces externos con target=_blank + noopener', sinNoopener.length === 0, `${externos.length} externos, ${sinNoopener.length} sin noopener`);

// ---- analítica con consentimiento y ausencia de marcadores ------------------
const ids = new Set();
const walk = (dir) => {
  for (const e of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', '.astro'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(astro|js|mjs|ts|json|jsonc|html|md|css)$/.test(e.name)) {
      const t = fs.readFileSync(path.join(root, p), 'utf8');
      for (const m of t.matchAll(/G-[A-Z0-9]{6,}/g)) ids.add(m[0]);
      for (const bad of ['ca-' + 'pub-', 'ads' + 'bygoogle', 'Ad' + 'Sense', 'TO' + 'DO', 'FI' + 'XME', 'place' + 'holder', 'lorem ' + 'ipsum', 'https://exa' + 'mple', 'http://exa' + 'mple']) {
        if (t.includes(bad)) check(`sin marcador "${bad}" (${p})`, false);
      }
    }
  }
};
walk('');
check('única medición GA4 G-HXM22WWPKP', ids.size === 1 && ids.has('G-HXM22WWPKP'), [...ids].join(','));
check('control de análisis con persistencia verificada', base.includes('src="/analytics.js"') && src('public/analytics.js').includes('if(read()!==allow)') && src('public/analytics.js').includes('deniedHere') && src('public/analytics.js').includes('if(initialized)return'));
check('registro SW fuera de desarrollo local', /\.includes\('local' \+ 'host'\)/.test(base));

// ---- clima / contenido externo ---------------------------------------------
check('snapshot meteorológico embebido como JSON', (()=>{try{const m=index.match(/<script[^>]*id="weather-seed"[^>]*>([\s\S]*?)<\/script>/);if(!m)return false;const value=JSON.parse(m[1]);return value===null||Boolean(value.current&&value.daily);}catch{return false;}})());
check('fallback SENAMHI (noscript)', /SENAMHI/.test(index) && /<noscript>/.test(index));
check('atribución fotográfica visible', /CC BY-SA 4\.0/.test(index) && index.includes('creativecommons.org/licenses/by-sa/4.0/') && index.includes('commons.wikimedia.org/wiki/File:'));
const bajo = (s) => s.toLowerCase();
for (const a of ['hlaiza', 'ivan brehaut', 'nina zaitceva', 'herwarth morales']) {
  check(`autor "${a}" citado en portada y términos`, bajo(index).includes(a) && bajo(terminos).includes(a));
}
check('4 licencias CC BY-SA 4.0 en términos', (terminos.match(/CC BY-SA 4\.0/g) || []).length >= 4);
check('4 licencias CC BY-SA 4.0 visibles en portada', (index.match(/CC BY-SA 4\.0/g) || []).length >= 4);

// ---- informe -----------------------------------------------------------------
let fails = 0;
console.log(`Conformidad: ${checks.length} verificaciones`);
for (const c of checks) {
  if (c.ok) continue;
  fails++;
  console.log(`  [FAIL] ${c.name}${c.detalle ? ' — ' + c.detalle : ''}`);
}
if (fails === 0) {
  console.log('Todas las verificaciones superadas.');
} else {
  console.log(`${fails} verificación(es) fallida(s).`);
}
process.exit(fails ? 1 : 0);
