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
        const template = Handlebars.compile(source);
        const result = template(data);
        callback(null,result);
    })
}

//create an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url ==='/'){
        const templatePath = path.join(__dirname, 'templates', 'home.html');
        const data = {
            title: 'Simple HTTP Handlebars example',
            welcomeMessage: 'Welcome to our simple server!'
        }; 
        renderTemplate(templatePath, data, (err, html)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
            }
            else{
                res.statusCode = 200;
                res.end(html);
            }
        })
    } else if (req.url === '/Buuu'){
        res.statusCode = 200;
        res.end('<h1>Hello, Buuu</h1>');
    } else if(req.url === '/about') {
        res.statusCode = 300;
        res.end('<h1>How About You?</h1>')
    } else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

// start the server 
const port = 3000;
const host = '127.0.0.1';
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})