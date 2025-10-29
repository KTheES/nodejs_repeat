var fs= require('fs');

fs.readFile('home.js', 'utf-8', function(err, data) {  // 비동기방식 파일읽기. -> fileRead function이 다른 thread에 의해 실행
    console.log('1 readAsync : %s' ,data);      // callback 
                                            //I/O 작업이 시작되면 메인 스레드를 차단하지 않고 즉시 다음 코드를 실행
});                                           // 완료되면 콜백 함수(Callback Function) 또는 Promise를 통해 결과를 알려줌

var data = fs.readFileSync('home.js', 'utf-8');   // 동기방식 파일읽기. -> Async보다 더 먼저 실행됩니다.
console.log('2 readAsync : %s', data);            // 동기방식 처리 -> 타 스레드 차단 -> 동기 처리 -> 비동기 처리