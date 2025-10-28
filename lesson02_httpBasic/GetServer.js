// get,post 요청
// http://naver.com/Post.nhn?postId=3572432&cafeId=158763 key=val 형태 연속, 실제 주소값은 ?까지.
// 뒤의 것들은 전부 Query String. 구분자는 &, 
// 주소형태로 요청  / html <form>을 사용해 요청도 가능
var http = require('http'); // http 모듈 불러옴
var url = require('url'); // url모듈
var quertString = require('querystring'); // querystring 모듈

var server = http.createServer(function(req,res){
    console.log("-------log start-------");

    var parsedUrl = url.parse(req.url); // 브라우저 요청 주소 파싱하여 객체화 후 출력
    console.log(parsedUrl)

    var parsedQuery = quertString.parse(parsedUrl.query,'&','=');
    // 객체화된 url 중 queryString부분만 객체화 후 출력, &, = -> 구분자임, 굳이 이거 안 써도 다른거 구분자로 사용 가능.
    console.log(parsedQuery);

    console.log('---log end---');

    res.writeHead(200,{'Content-type':'text/html'});
    res.end("hello new world");
    res.end('var1=' +parsedQuery.var1 )
});

server.listen(8080, function(){
    console.log('Server is running');
})