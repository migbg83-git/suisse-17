import fs from 'fs';
import path from 'path';

// Centralized base URL for the site
const baseUrl = 'https://archwise.dev';

// Paths
const articlesJsonPath = path.join(__dirname, '../src/assets/content/articles.json');
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const robotsPath = path.join(publicDir, 'robots.txt');

// Read articles.json
const articles = JSON.parse(fs.readFileSync(articlesJsonPath, 'utf-8'));

// Static routes
const staticRoutes = [
  '/',
  '/manifesto',
  '/articulos'
];

// Build sitemap entries
const urls = [
  ...staticRoutes.map(route => ({
    loc: `${baseUrl}${route}`
  })),
  ...articles.map((article: any) => ({
    loc: `${baseUrl}/articulos/${article.slug}`,
    lastmod: article.date ? article.date.split('T')[0] : undefined
  }))
];

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(url => {
    let xml = `  <url>\n    <loc>${url.loc}</loc>`;
    if (url.lastmod) {
      xml += `\n    <lastmod>${url.lastmod}</lastmod>`;
    }
    xml += `\n  </url>`;
    return xml;
  }).join('\n') +
  '\n</urlset>\n';

// Write sitemap.xml
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

// Generate robots.txt
const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;
fs.writeFileSync(robotsPath, robotsTxt, 'utf-8');

console.log('✅ sitemap.xml and robots.txt generated.');
