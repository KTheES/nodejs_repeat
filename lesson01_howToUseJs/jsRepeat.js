// js는 var과 let으로 변수선언 ( 최근에는 let은 잘 쓰지 않는 편인듯 ... )
// var name = "kthees";

//함수 선언

function sum(param1, param2, param3) {
    return param1+param2+param3;// 파라미터에 타입 값 안쓰는건 역시 익숙하지가 않다.
}

var result= sum(1,2,3);

console.log(result) // 6


function printed(param4) {
    console.log(param4);        // return 없는 function
}
printed("뺘뺘뺘")

// 조건문

var i = 0;


while(i<10){
    console.log(i);
    i++;
}

// 클래스
function Classed(msg) {
    this.name = "Class";
    this.message = msg;

    message2 = "it's me, mario!";   // this로 선언되지 않은 변수

    this.print = function(){
        console.log(message2);
    };
}
//객체 생성, java, c++ 처럼 new 키워드
var myClass = new Classed("Hi");
console.log(myClass.message);
console.log(myClass.message2);  // this로 선언되지 않은 변수는 undefined,찾을 수 없음
myClass.print();


///비슷한 예제

function myClassed(msg) {
    this.name = "I am Class";
    this.message = msg

    messagee2 = "hello world";
}

myClassed.prototype.getMessage = function(){// myClassed 객체의 프로토타입을 가져와
    // message 값을 return하는 함수, 참조..? 와는 다르나. 안의 기능을 분리 가능
    return this.message;
}

myClassed.prototype.getMessage2 = function() {
    return this.message2
}

var myClassed = new myClassed("welcome to my hub");
console.log(myClassed.getMessage());
console.log(myClassed.getMessage2()); // 둘 다 undefined. 
// 내부에 선언한 함수와 다르게 프로토타입으로 선언한 함수는 값을 사용 불가함.




