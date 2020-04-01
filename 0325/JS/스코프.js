// <8-7. 스코프>
// 변수는 자신을 감싸고 있는 함수 바깥으로 빠져나갈 수 없다!
// var로 선언하는 기존 변수를 수정하는 것을 꼭 구분하기!
// var는 선언한 함수 내부에서만 유효하다. 펑션(함수) 스코프라고 불린다.
//스코프는 정적이다.

/* (답이 global인 예제) */
// var x = 'global';

// function ex() {
//     var x = 'local';
//     x = 'change';
// }

// ex();
// window.alert(x);
//-------------------------------------------------
/* (답이 change인 예제) */
// var x = 'global';

// function ex() {
//     x = 'local';
//     x = 'change';
// }

// ex();
// window.alert(x);





//<8-8. 스코프 체인>
// 스코프 간의 상하관계를 스코프 체인이라고 부른다.
/* (같은 위치에서 변수 enemy를 찾아야 하는데 없으므로 에러가 뜸) */
// var name = 'zero';

// function outer() {
//     console.log('외부', name);   // 외부 zero
//     function inner() {
//         var enemy = 'nero';
//         console.log('내부', name);   // 내부 zero
//     }
//     inner();
// }

// outer();
// console.log(enemy);
//---------------------------------------------
/* (undefined가 뜸) */
// var name = 'zero';
// var enemy;

// function outer() {
//     console.log('외부', name);   // 외부 zero
//     function inner() {
//         var enemy = 'nero';
//         console.log('내부', name);   // 내부 zero
//     }
//     inner();
// }

// outer();
// console.log(enemy);





//<8-9. 렉시컬 스코프>
// 코드가 적힌 순간 스코프가 정해진다. 이것을 렉시컬 스코프라고 불린다.
// (nero가 답)
// var name = 'zero';   // -> nero
// function log() {
//     console.log(name);   // nero
// }

// function wrapper() {
//     name = 'nero';
//     log();
// }
// wrapper();
//---------------------------------------------------
// (zero가 답)
// var name = 'zero';      
// function log() {
//     console.log(name);   // zero    // 위에 코드의 var name = 'zero';과 연결
// }

// function wrapper() {
//     var name = 'nero';
//     log();
// }
// wrapper();
//---------------------------------------------------
//var 말고 function 선언도 스코프 적용을 받는다.