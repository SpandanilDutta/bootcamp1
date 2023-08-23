const http = require ("http");
const fs = require("fs");

const data =  fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8")
    const objdata = JSON.parse(data);

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the other side");
    }
    
    else if (req.url == "/about"){
        res.end("Hello form the other about side");
    }
    
    else if(req.url == "/contact") {
        res.end("Hello form the other contact side");
    }

    else if(req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json"});
        res.end(objdata[1].name);
    }
    
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1> 404 error page. Page does not exist.</h1>")
    }
});


server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to the port 3000");
});