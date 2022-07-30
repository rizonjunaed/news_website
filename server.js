const httpModule = require('http');
const fileSystemModule = require('fs');

const requestHandler = (req, res) => {
    console.log(req.headers.host, req.url, 'request values');

    if (req.url !== '/'){
        res.statusCode = 400; 
        res.end();
    }
    else{
        const handleFileRead = (err, contents) => {
            if (err)
            {
                res.statusCode = 400;

                res.end();
            }
            else {
                res.statusCode = 200;

                res.setHeader('Content-Type', 'text/html');

                res.write(contents)

                res.end();
            }
        }
        
        fileSystemModule.readFile('./news.html', handleFileRead); 
    }
}

const server = httpModule.createServer(requestHandler);

server.listen(3003);
