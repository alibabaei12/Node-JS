var http= require ('http')

var url = require('url');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/')
    {
        res.writeHead(200, {
            'content-Type' : 'text/plain'
        })
        res.end('welcome to Home page')
    }
    else if(pathname == '/about')
    {
        res.writeHead(200, {
            'content-Type' : 'text/plain'
        })
        res.end('welcome to About page')
    }
    else if(pathname == '/register')
    {
        res.writeHead(200, {
            'content-Type' : 'text/plain'
        })
        res.end('welcome to Register page')
    }
    else if(pathname == '/login')
    {
        res.writeHead(200, {
            'content-Type' : 'text/plain'
        })
        res.end('welcome to Login page')
    }
    else if(pathname == '/redirect')
    {
        res.writeHead(301, {
            'Location' : '/'
        })
        res.end('welcome to bla page')
    }
   

}).listen(3000, "127.0.0.1")

console.log('server is ready');