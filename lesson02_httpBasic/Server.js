var http = require('http'); // http 모듈을 require로 불러옵니다. import와 비슷한 역할

var server = http.createServer(function(req,res) {  // createServer라는 함수로 서버 생성
    //함수 없이 function이라고만 작성된 파라미터는 이벤트 발생시 콜백.
        // -> 생성된 서버로 요청이 들어오면 function 내부의 로직 실행 
        // -> 내부에 선언한 req,res로 사용할 수 있는 값 넘겨줌. -> function 내에서 사용
    //사용자 http 요청이 들어오면 res(반응)
    res.writeHead(200,{'Content-Type' : 'text/html'});
    // res로 넘어온 값으로 함수 실행. callback되었을 시 값은 객체와 같음.
    res.end('hello node.js');   // 실질적으로는 이게 <p> 정도의 크기로 white page에 찍힙니다. 
});

server.listen(8080,function() {
    console.log('server is running on http://localhost:8080');
});