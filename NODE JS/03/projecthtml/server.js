import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function renderTemplate(templatePath, data, callback){
    fs.readFile(templatePath,'utf-8', (err,source)=>{
        if(err){
            return callback(err);
        }
        const template = handlebars.compile(source);
        const result = template(data);
        callback(null,result);
    })
}
//create an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url ==='/'){
        res.statusCode = 200;
        res.end('<h1>Hello, World!</h1>');
    } else if (req.url === '/Buuu'){
        res.statusCode = 200;
        res.end('<h1>Hello, Buuu</h1>');
    }   
    else if (req.url === '/Buuu'){
        res.statusCode = 200;
        res.end('<h1>Hello, Buuu</h1>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1>404 N  ot Found</h1>');
    }
});

// start the server 
const port = 3000;
const host = '127.0.0.1';
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${host}:${port}`);
})