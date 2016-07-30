// Simple nodejs routing
var http = require('http'),
    fs   = require('fs');

// Static file serving
function serveStatic(res, path, contentType, responseCode) {
    if(!responseCode){responseCode = 200;}
    fs.readFile(__dirname + path, function (err, data) {
        if(err){
            res.writeHead(500, {'Content-type' : 'text/plain'});
            res.end('500 - internal error');
        }else{
            res.writeHead(responseCode, {'Content-type' : contentType});
            res.end(data);
        }
    });
}

// Routing
http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path){
        case '':
            serveStatic(res, '/public/index.html','text/html');
            break;
        case '/about':
            serveStatic(res, '/public/about.html','text/html');
            break;
        case '/static/images/sitelogo.jpg':
            serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg')
            break;
        default:
            serveStatic(res, '/public/404.html', 'text/html', 404);
            break;
    }
    
}).listen(3000);

console.log('Server is serving on localhost: 3000 ');
