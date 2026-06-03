const fs = require('fs');
const path = require('path');
const base = 'C:/suisse-17/content/enterprise-ai';
const dirs = fs.readdirSync(base).filter(d => /^article-\d+$/.test(d)).sort((a,b)=>Number(a.split('-')[1])-Number(b.split('-')[1]));
const out = [];
for (const d of dirs) {
  const p = path.join(base,d);
  const jp = path.join(p,'article.json');
  const mp = path.join(p,'article.md');
  let j = null;
  if (fs.existsSync(jp)) {
    try { j = JSON.parse(fs.readFileSync(jp,'utf8')); } catch(e){ j = {__parseError:e.message}; }
  }
  let md = fs.existsSync(mp) ? fs.readFileSync(mp,'utf8') : '';
  const words = md.replace(/^---[\s\S]*?---\s*/,'').trim().split(/\s+/).filter(Boolean).length;
  const links = [...md.matchAll(/https?:\/\/archwise\.org\/articulos\/([a-z0-9\-]+)/g)].map(m=>m[1]);
  const uniqLinks = [...new Set(links)];
  out.push({
    articleId: d,
    hasJson: fs.existsSync(jp),
    hasMd: fs.existsSync(mp),
    title: j?.title ?? null,
    slug: j?.slug ?? null,
    description: j?.description ?? null,
    descriptionLen: typeof j?.description === 'string' ? j.description.length : null,
    excerpt: j?.excerpt ?? null,
    excerptLen: typeof j?.excerpt === 'string' ? j.excerpt.length : null,
    readingTime: j?.readingTime ?? null,
    category: j?.category ?? null,
    relatedArticles: Array.isArray(j?.relatedArticles) ? j.relatedArticles : [],
    relatedCount: Array.isArray(j?.relatedArticles) ? j.relatedArticles.length : 0,
    mdWordCount: words,
    internalLinksToArticles: uniqLinks,
    internalLinksCount: uniqLinks.length,
    parseError: j?.__parseError ?? null,
  });
}
const slugs = new Set(out.map(x=>x.slug).filter(Boolean));
for (const r of out) {
  r.invalidRelated = r.relatedArticles.filter(s=>!slugs.has(s));
}
// incoming graph from relatedArticles
const incoming = {};
out.forEach(r=>incoming[r.slug]=0);
out.forEach(r=>r.relatedArticles.forEach(s=>{ if (incoming[s] !== undefined) incoming[s]++; }));
out.forEach(r=>{ r.relatedIncoming = r.slug ? incoming[r.slug] : 0; });
// incoming from markdown links
const mdIncoming = {};
out.forEach(r=>mdIncoming[r.slug]=0);
out.forEach(r=>r.internalLinksToArticles.forEach(s=>{ if (mdIncoming[s] !== undefined) mdIncoming[s]++; }));
out.forEach(r=>{ r.mdIncoming = r.slug ? mdIncoming[r.slug] : 0; });

console.log(JSON.stringify(out,null,2));
