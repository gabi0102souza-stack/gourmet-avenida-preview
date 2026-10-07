const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.avif':'image/avif'};
http.createServer((req,res)=>{
 let requestPath;try{requestPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end();return}
 const full=path.resolve(root,'.'+(requestPath==='/'?'/index.html':requestPath));
 if(!full.startsWith(root+path.sep)||requestPath.includes('/.')){res.writeHead(403).end();return}
 fs.readFile(full,(err,data)=>{if(err){res.writeHead(404).end('Not found');return}res.writeHead(200,{'Content-Type':types[path.extname(full)]||'application/octet-stream','Cache-Control':'no-store'}).end(data)});
}).listen(4186,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:4186'));

