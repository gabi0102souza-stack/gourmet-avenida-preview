const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const dest=path.join(root,'.build');
fs.mkdirSync(dest,{recursive:true});
for(const name of ['index.html','fontes.html','styles.css','script.js'])fs.copyFileSync(path.join(root,name),path.join(dest,name));
fs.cpSync(path.join(root,'assets','images'),path.join(dest,'assets','images'),{recursive:true});
fs.copyFileSync(path.join(root,'assets','favicon.svg'),path.join(dest,'assets','favicon.svg'));
fs.writeFileSync(path.join(dest,'.nojekyll'),'');
for(const page of ['index.html','fontes.html']){
 const html=fs.readFileSync(path.join(dest,page),'utf8');
 if(!html.includes('noindex, nofollow'))throw new Error('Missing noindex: '+page);
 for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(/^(https?:|tel:|mailto:)/.test(m[1]))continue;
  if(!fs.existsSync(path.join(dest,m[1])))throw new Error('Missing asset '+m[1]);
 }
}
console.log('Static package ready: .build/');
