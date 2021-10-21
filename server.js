const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync(`${__dirname}/index.html`);
const names = ["francis","steve","rob"];
const cars = {
    name:'Ford',
    model:"Fiesta"
}


const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(HTML)
    } else if(req.url === '/api/user') {
        res.writeHead(200, {'Content-type':'application/json'})
        const json = JSON.stringify ({
            name:'Francis',
            lastname:'Jones'
        })
        res.end(json)
    } else {
        res.writeHead(404)
        res.end();
    }

});

const port = 8282;
server.listen(port, '127.0.0.1');
console.log(`server is running on port ${port}`)