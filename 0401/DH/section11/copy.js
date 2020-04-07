var obj1 = { a:1, b:2, c:3 }
var obj2 = {};
Object.keys(obj).forEach(function(key){
    obj2[key] = obj1[key];
}); 
// 1단계만 복사, 나머지는 참조
// var obj1 = { a:1, b:2, c: { d:3 } } -> 2단계 

var arr1 = [1,2,3]
var arr2 = arr1.slice();
// 1 단계만 복사, 나머지는 참조

var obj3 = JSON.stringify(JSON.parse(obj1)); // 복사 
var arr3 = JSON.stringify(JSON.parse(arr1)); // 복사 
// 2이상의 단계를 가지면 JSON을 이용한다. - 성능 최악 
