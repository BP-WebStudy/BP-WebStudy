//<3-4. js로 HTML 태그 만들기>
//document 객체의 메서드를 사용해 HTML을 만들 수 있다.
var 바디 = document.body;
// createElement()함수를 이용해 div태그 생성
var 단어 = document.createElement('div');
// textContent를 이용해 태그안에 글자 추가
단어.textContent = '제로초';
// append()함수를 이용해 body태그에 추가
document.body.append(단어);

// 폼태그 생성
var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);    // document.body.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);     // document.body.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);


//<3-5. 끝말잇기 화면에 표시>
//반복문을 이벤트리스너로 대체
폼.addEventListener('submit', function 콜백함수 (e) {//submit은 클릭 대신 enter로 가능 // 버튼.addEventListener('click', function 콜백함수 () 
    e.preventDefault();  //새로고침 없애주기
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {//입력창.value === 초밥
        결과창.textContent = '딩동댕'
        단어.textContent = 입력창.value;
        입력창.value = '';    //입력창 글자 없애기
        입력창.focus();       //입력부분이 클릭 없이 바로 입력이 가능하도록 만들어줌
    } else{
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
})


//<3-6. 이벤트리스너 맛보기>
//매개변수 이름은 마음대로! 호출할 때 넣은 값(인수)과 1대 1매칭된다.
/*
function 더하기(숫자1, 숫자2) {
    console.log(숫자1 + 숫자2);
}
더하기(3,5)
*/




//<3-3. script 태그 사용법>
// var word = '제로초'
// while (true) {
//     var answer = prompt(word);
//     if (word[word.length - 1] === answer[0]) {
//         alert('딩동댕');
//         word = answer;
//     } else{
//         alert('땡');
//     }
// }