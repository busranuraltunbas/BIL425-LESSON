const http = require("http");
const fs = require("fs");
const path = require("path/posix");


/*const server = http.createServer((req, res) =>{

    res.writeHead(200, {'Content-Type': 'text/plain'});
    const readStream = fs.createReadStream(path.join(__dirname, "data", "testdata.txt"), 'utf-8');//???
    readStream.pipe(res);
    
})*/

const server = http.createServer((req, res) =>{

    localhost = '127.0.0.1'
    http://localhost:3000/index

    if(req.url ==='/index'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const readStream = fs.createReadStream(path.join(__dirname, "html", "index.html"));
        readStream.pipe(res);
    }
    else if(req.url ==='/about'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const readStream = fs.createReadStream(path.join(__dirname, "html", "about.html"));
        readStream.pipe(res);
    }
    
})

server.listen(3000, () => {
    console.log('stream ren port  ${3000}');
} )
