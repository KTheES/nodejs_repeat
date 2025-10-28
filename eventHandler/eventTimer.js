var Event = require('events');

var sec = 1;

exports.timer = new Event();

setInterval(function() {    // js 내장함수 setInterval
    exports.timer.emit('tick');  // tick 이벤트 발생
}, sec*1000);       // 1000ms마다