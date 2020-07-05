var xi = /a/;
console.log("Abcde".match(xi));

// i를 붙이면 대소문자를 구분하지 않음
var oi = /a/i; 
console.log("Abcde".match(oi));

var xg = /a/;
console.log("abcdea".match(xg));

// 검색된 모든 결과를 리턴한다.
var og = /a/g;
console.log("abcdea".match(og));

var ig = /a/ig;
console.log("AabcdAa".match(ig));