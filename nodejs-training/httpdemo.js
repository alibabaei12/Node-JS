var http= require ('http')

http.createServer(function(req, res){

    res.writeHead(301, {
        'Location' : 'http://localhost:4200'
    })
    res.end('welcome to my server')
}).listen(3000, "127.0.0.1")

console.log('server is ready');