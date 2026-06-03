const fs = require('fs');
const path = require('path');
const base = 'C:/suisse-17/content/enterprise-ai';
const dirs = fs.readdirSync(base).filter(d => /^article-\d+$/.test(d)).sort((a,b)=>Number(a.split('-')[1])-Number(b.split('-')[1]));
function parseFrontmatter(md){
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/);
  if(!m) return {};
  const obj={};
  for(const line of m[1].split(/\r?\n/)){
    const mm=line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if(mm) obj[mm[1]] = mm[2].trim();
  }
  return obj;
}
const rows=[];
for(const d of dirs){
  const p=path.join(base,d);
  const jp=path.join(p,'article.json');
  const mp=path.join(p,'article.md');
  const md=fs.existsSync(mp)?fs.readFileSync(mp,'utf8'):'';
  const fm=parseFrontmatter(md);
  let j={};
  if(fs.existsSync(jp)) {try{j=JSON.parse(fs.readFileSync(jp,'utf8'));}catch{j={};}}
  const linkMatches=[...md.matchAll(/\]\((?:https?:\/\/archwise\.org)?\/articulos\/([a-z0-9\-]+)\)/g)].map(m=>m[1]);
  const textUrlMatches=[...md.matchAll(/https?:\/\/archwise\.org\/articulos\/([a-z0-9\-]+)/g)].map(m=>m[1]);
  const allLinks=[...new Set([...linkMatches,...textUrlMatches])];
  rows.push({
    id:d,
    slug:j.slug||fm.slug||null,
    hasJson:fs.existsSync(jp),
    jsonMissing:[ 'title','slug','description','excerpt','readingTime','category' ].filter(k=>j[k]===undefined||j[k]===null||j[k]===''),
    fmKeys:Object.keys(fm),
    internalLinkCount:allLinks.length,
    internalLinks:allLinks,
    relatedCount:Array.isArray(j.relatedArticles)?j.relatedArticles.length:0,
  });
}
console.log(JSON.stringify(rows,null,2));
