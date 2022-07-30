const httpModule = require('http');
const fileSystemModule = require('fs');

const requestHandler = (req, res) => {
    console.log(req.headers.host, req.url, 'request values');

    if (req.url === '/'){
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
    else if(req.url === '/news.css') {

        const handleCssFileRead = (err, contents) => {
            if (err)
            {
                res.statusCode = 400;

                res.end();
            }
            else {
                res.statusCode = 200;

                res.setHeader('Content-Type', 'text/css');

                res.write(contents)

                res.end();
            }
        }

        fileSystemModule.readFile('./news.css', handleCssFileRead);
    }
    else if(req.url === '/news.js') {

        const handleJsFileRead = (err, contents) => {
            if (err)
            {
                res.statusCode = 400;

                res.end();
            }
            else {
                res.statusCode = 200;

                res.setHeader('Content-Type', 'application/javascript');

                res.write(contents)

                res.end();
            }
        }

        fileSystemModule.readFile('./news.js', handleJsFileRead); 
    }
    else {
        res.statusCode = 400; 
        res.end();
    }
}

const server = httpModule.createServer(requestHandler);

server.listen(3003);
