var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다.';

//replace안에서 urlpattern에 해당하는 텍스트를 찾을 때마다 두번째 인자로 전달된 함수가
//replace함수 내부적으로 호출된다. 호출됐을때 검색된 첫번째 url을 첫번째 인자로 전달.
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});

console.log(result);