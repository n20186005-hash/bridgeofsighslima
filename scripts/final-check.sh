#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
corepack pnpm audit:content

if [[ -f pnpm-workspace.yaml ]]; then
  node -e "const fs=require('fs'); const s=fs.readFileSync('pnpm-workspace.yaml','utf8'); if(!/packages:\\s*\\n\\s*-\\s*['\"]?\\.['\"]?/.test(s)) process.exit(1)"
fi

if grep -RInE 'example[.]com|local(host)|chrome-extension[:]//' dist src public astro.config.mjs 2>/dev/null; then
  echo 'Se encontraron marcadores prohibidos.' >&2
  exit 1
fi

if [[ -f dist/sitemap-index.xml || -f dist/sitemap-0.xml ]]; then
  if grep -RIn '<lastmod>' dist/sitemap*.xml; then
    echo 'El sitemap contiene lastmod; revisar antes de publicar.' >&2
    exit 1
  fi
fi

echo 'Validación final superada.'
