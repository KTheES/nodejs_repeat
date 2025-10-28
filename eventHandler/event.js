var Event = require('events');

var custom_obj = new Event();// 객체 초기화

custom_obj.on('call', () =>{     //event 모듈의 on()을 재정의 -> call 처리
    console.log('event called');
});

custom_obj.emit('call');   // call event 강제호출