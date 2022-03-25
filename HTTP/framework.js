const http = require("http");

const EventEmitter = require("events");
const emitter =  new EventEmitter();


class Router{
    constructor(){
        this.enpoints = {}
    }
    request(method = "GET", path, handler){
        if(!this.enpoints[path]){
            this.enpoints[path];
        }
        const endpoint = this.enpoints[path];

        if(endpoint[method]){
            throw new Error('')
        }

        endpoint[method] = handler
        emitter.on('[${path}]')
    }

    get(path, handler){
        this.request('GET', path, handler);
    }

    get(path, handler){
        this.request('POST', path, handler);
    }

}

const PORT = 3000;

const server = http.createServer((req, res) =>{
    emitter.emit();
})

server.listen(PORT, () => {
    console.log('running port  ${PORT}');
} )
