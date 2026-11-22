import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('dist');
http.createServer(async(req,res)=>{try{const p=resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]==='/'?'/index.html':req.url.split('?')[0]));if(!p.startsWith(root+'/')&&!p.startsWith(root+'\\'))throw Error();res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript'})[extname(p)]||'text/plain');res.end(await readFile(p));}catch{res.statusCode=404;res.end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173'));
