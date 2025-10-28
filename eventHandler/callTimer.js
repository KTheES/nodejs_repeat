var module= require('./eventTimer');


module.timer.on('tick', function(time) {
    var time = new Date() ; // Date 객체 생성
    console.log('time : '+time);
});