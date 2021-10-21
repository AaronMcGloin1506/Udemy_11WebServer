const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync(`${__dirname}/index.html`);
const names = ["francis","steve","rob"];
const cars = {
    name:'Ford',
    model:"Fiesta"
}


const server = http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-type':'text/html'})
    // res.end(HTML)
    res.writeHead(200, {'Content-type':'application/json'})
    const json =JSON.stringify ({
        names,
        cars
    })
    res.end(json)
});

const port = 8282;
server.listen(port, '127.0.0.1');
console.log(`server is running on port ${port}`)