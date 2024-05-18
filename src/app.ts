import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url);
    //res.write('Hola mundo');
   
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.write('<h1>Hola mundo</h1>')
    res.end();
})

server.listen(8081, () =>{
    console.log('Server running on port 8081');
})