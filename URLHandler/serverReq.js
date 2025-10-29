const response  = require('express');
var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {

    console.log(req.url);
    var parsedUrl = url.parse(req.url);

    var resource =parsedUrl.pathname;
    console.log('resource path = %s',resource);

    if(resource == '/address') {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
        res.end('부산광역시');
    }else if(resource =='/phone') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('010-0000-1111');
    }else if (resource == '/name'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('김일');
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('404 Page not Found')
    }

});

server.listen(80, function() {
    console.log('server is running on http://localhost:80');
})

// server is running on http://localhost:80
// /
// resource path = /
// /name
// resource path = /name
// /phone
// resource path = /phone
// /address
// resource path = /address