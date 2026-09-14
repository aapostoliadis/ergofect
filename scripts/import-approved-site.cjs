const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const source = path.resolve(process.argv[2] || path.join(root, '../ergofect-v2'));
const manifest = JSON.parse(fs.readFileSync(path.join(source, 'qa/pages-manifest.json'), 'utf8'));
const routes = [], records = [];
for (const page of manifest) {
  const route = page.route === '/' ? '/' : page.route.replace(/\/$/, '');
  const sourceFile = path.join(source, ...page.file.split(/[\\/]/));
  let html = fs.readFileSync(sourceFile, 'utf8');
  // Keep navigation on the canonical production routes without an extra redirect.
  html = html.replace(/href="(\/(?!\/)[^"?#]*?)\/([?#][^"]*)?"/g, (_, p, suffix) => `href="${p}${suffix || ''}"`);
  html = html.replaceAll('/assets/', '/ergofect-assets/');
  if (!html.includes('rel="canonical"')) html = html.replace('</head>', '<link rel="canonical" href="https://www.ergofect.com/">\n</head>');
  html = html.replace('</head>', '<link rel="stylesheet" href="/site-runtime.css">\n</head>');
  html = html.replace('</body>', '<script src="/site-runtime.js" defer></script>\n</body>');
  html = html.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '');
  const destination = path.join(root, 'public/site-v2', route === '/' ? '' : route, 'index.html');
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html);
  routes.push(route);
  records.push({ route, source: page.file.replaceAll('\\', '/'), sha256: crypto.createHash('sha256').update(html).digest('hex') });
}
const assetDir = path.join(root, 'public/ergofect-assets');
fs.mkdirSync(assetDir, { recursive: true });
for (const file of fs.readdirSync(path.join(source, 'assets'))) {
  if (!/\.(png|webp)$/.test(file)) continue;
  fs.copyFileSync(path.join(source, 'assets', file), path.join(assetDir, file));
}
fs.mkdirSync(path.join(root, 'site'), { recursive: true });
fs.writeFileSync(path.join(root, 'site/routes.json'), JSON.stringify(routes, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'site/release-manifest.json'), JSON.stringify({ design: 'From friction to flow', pages: records }, null, 2) + '\n');
console.log(`Imported ${routes.length} approved pages and their original images.`);
