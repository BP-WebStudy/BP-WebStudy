var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
//문자열에 담겨 있는 값을 치환하기
//캡처: 그룹을 지정해서 가져온 값을 저장하기
var result = str.result = str.replace(pattern, "$2, $1");
console.log(result);