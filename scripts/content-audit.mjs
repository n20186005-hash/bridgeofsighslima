import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const banned = ['example' + '.com', 'local' + 'host', 'chrome-' + 'extension://', 'zh' + '-CN'];
const allowedExt = new Set(['.astro', '.html', '.js', '.mjs', '.json', '.jsonc', '.css', '.xml', '.txt', '.md', '.svg']);
const hits = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git'].includes(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (allowedExt.has(path.extname(entry.name))) {
      const text = fs.readFileSync(p, 'utf8');
      for (const token of banned) {
        if (text.includes(token)) hits.push(`${path.relative(root, p)} -> ${token}`);
      }
    }
  }
}
walk(root);
if (hits.length) {
  console.error('Contenido no permitido detectado:\n' + hits.join('\n'));
  process.exit(1);
}
console.log('Auditoría de contenido superada.');
