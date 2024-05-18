import fs from 'fs';
import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url);
    //res.write('Hola mundo');
    // res.writeHead(400, {'Content-Type': 'text/html'});
    // res.write(`<h1>URL ${req.url}</h1>`)
    // res.end();

    // const data = { name: 'Jhon Doe', age: 30, city: 'New York'};
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify(data));

    if (req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end(htmlFile)
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
})

server.listen(8081, () =>{
    console.log('Server running on port 8081');
})