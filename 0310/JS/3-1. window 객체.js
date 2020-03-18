// <3-1. window 객체>

//window객체는 브라우저 전체를 담당
//document객체는 페이지(탭) 즉 화면담당(window객체 안에 document객체가 있음)

// var newWindow = window.open() 새창 열기

// window는 생략 가능 ex) window.alert()를 alert()로 써도됌. 

/* 전역 변수는 전역 객체의 속성이 된다. (함수 바깥)
var a = 'b';
window.a; //'b'
*/

/* 전역 변수와 함수 안의 변수가 다른 이유는 함수의 특수성(함수스코프) 때문입니다.
*/


var 이름 = '제로초'
// console.log(window.이름)


//
function 함수(반복횟수) {
    console.log('*'.repeat(반복횟수))
}
console.log(함수(5))
console.log(함수(10))


//
function 기억하세요() {
    var 몸무게 = 70;
}
console.log(기억하세요())
// console.log(window.몸무게)  --> error


