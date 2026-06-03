const fs=require('fs'); const path=require('path');
const base='C:/suisse-17/content/enterprise-ai';
const dirs=fs.readdirSync(base).filter(d=>/^article-\d+$/.test(d)).sort((a,b)=>Number(a.split('-')[1])-Number(b.split('-')[1]));
const arr=[];
for(const d of dirs){
 const jp=path.join(base,d,'article.json');
 const mp=path.join(base,d,'article.md');
 let j={}; if(fs.existsSync(jp)){try{j=JSON.parse(fs.readFileSync(jp,'utf8'));}catch(e){j={parseError:e.message}}}
 const md=fs.existsSync(mp)?fs.readFileSync(mp,'utf8'):'';
 const wordCount=md.replace(/^---[\s\S]*?---\s*/,'').trim().split(/\s+/).filter(Boolean).length;
 const mdLinks=[...new Set([...md.matchAll(/\]\((?:https?:\/\/archwise\.org)?\/articulos\/([a-z0-9\-]+)\)/g)].map(m=>m[1]))];
 arr.push({id:d,slug:j.slug,title:j.title,desc:j.description,excerpt:j.excerpt,readingTime:j.readingTime,category:j.category,related:Array.isArray(j.relatedArticles)?j.relatedArticles:[],hasJson:fs.existsSync(jp),wordCount,mdLinks});
}
const slugs=new Set(arr.map(a=>a.slug).filter(Boolean));
const inc={}; const mdInc={}; arr.forEach(a=>{if(a.slug){inc[a.slug]=0; mdInc[a.slug]=0;}});
arr.forEach(a=>a.related.forEach(s=>{if(inc[s]!==undefined)inc[s]++;}));
arr.forEach(a=>a.mdLinks.forEach(s=>{if(mdInc[s]!==undefined)mdInc[s]++;}));
const rows=arr.map(a=>({id:a.id,slug:a.slug,hasJson:a.hasJson,category:a.category,relatedOut:a.related.length,relatedIn:a.slug?inc[a.slug]:0,mdOut:a.mdLinks.length,mdIn:a.slug?mdInc[a.slug]:0,invalidRelated:a.related.filter(s=>!slugs.has(s)),descLen:typeof a.desc==='string'?a.desc.length:null,excerptLen:typeof a.excerpt==='string'?a.excerpt.length:null,readingTime:a.readingTime??null,wordCount:a.wordCount,titleLen:typeof a.title==='string'?a.title.length:null}));
console.log('TOTAL',rows.length);
console.log('\nMISSING article.json:'); console.log(rows.filter(r=>!r.hasJson));
console.log('\nINVALID relatedArticles refs:'); console.log(rows.filter(r=>r.invalidRelated.length));
console.log('\nORPHANS related graph (relatedIn=0):'); console.log(rows.filter(r=>r.relatedIn===0).map(r=>({id:r.id,slug:r.slug,relatedOut:r.relatedOut})));
console.log('\nORPHANS full graph (relatedIn=0 and mdIn=0):'); console.log(rows.filter(r=>r.relatedIn===0 && r.mdIn===0).map(r=>({id:r.id,slug:r.slug,relatedOut:r.relatedOut,mdOut:r.mdOut})));
console.log('\nMISSING description:'); console.log(rows.filter(r=>r.descLen===null).map(r=>r.id));
console.log('\nLONG description (>170):'); console.log(rows.filter(r=>typeof r.descLen==='number'&&r.descLen>170).map(r=>({id:r.id,descLen:r.descLen})));
console.log('\nMISSING excerpt:'); console.log(rows.filter(r=>r.excerptLen===null).map(r=>r.id));
console.log('\nLONG excerpt (>190):'); console.log(rows.filter(r=>typeof r.excerptLen==='number'&&r.excerptLen>190).map(r=>({id:r.id,excerptLen:r.excerptLen})));
console.log('\nMISSING readingTime:'); console.log(rows.filter(r=>r.readingTime===null).map(r=>r.id));
console.log('\nNO relatedArticles out (=0):'); console.log(rows.filter(r=>r.relatedOut===0).map(r=>r.id));
console.log('\nNO md links out (=0):',rows.filter(r=>r.mdOut===0).length);
