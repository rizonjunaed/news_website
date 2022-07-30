const httpModule = require('http');

const requestHandler = (req, res) => {
    if (req.url !== '/'){
        res.statusCode = 400; 
        res.end("Failed");
    }
    else{
        res.statusCode = 200;
        res.end("Success");
    }
}

const server = httpModule.createServer(requestHandler);

server.listen(3003);
