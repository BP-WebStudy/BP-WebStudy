// window : 브라우저 , document : 페이지(탭)

//var newWindow = window.open() - 새탭 열기 
//window.alert('경고창이다!');

// html을 js로 통역해주는 역할 = 'DOM 객체'

// console.dir(document.body)

var 바디 = document.body; // html 파일의 body 부분을 가져온다.
var 단어 = document.createElement('div'); // div를 새로 만든다.
단어.textContent = '다혜';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!'
폼.append(버튼);
 // 새로만든 div 태그가 저장된 단어 변수를 바디에 추가하여 화면에 보일 수 있게 한다.

var 결과창 = document.createElement('div');
document.body.append(결과창);

// * 폼에서는 enter를 치면 새로고침이 되거나 다른 page로 넘어가기때문에 

폼.addEventListener('submit', function 콜백함수 (이벤트) {
    이벤트.preventDefault(); // * 이 기본 동작을 원하지 않는다면, 따로 예외 처리를 해줘야한다.

    if (단어.textContent[단어.textContent.length-1] === 입력창.value[0]){
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value='';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value='';
        입력창.focus();
    }

    

});