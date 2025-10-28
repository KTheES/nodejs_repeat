// post는 주소만 요청하고 변수와 값을 요청 body에 담아 서버측에 요청

var http = require('http');
var queryStr = require('querystring');

var server = http.createServer(function(req, res) {
    var postData = '';

    req.on('data', function(data){
        postData = postData+data;
    });

    req.on('end',function() {
        var parsedQuery = queryStr.parse(postData);

        console.log(parsedQuery);

        res.writeHead(200,{'Content-type':'text/html'});
        res.end('var1 = '+ parsedQuery.var1);
    });
});

server.listen(8080,function() {
    console.log('server is running on localhost:8080')
});


