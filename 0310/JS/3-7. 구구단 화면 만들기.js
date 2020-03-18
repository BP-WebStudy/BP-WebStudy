// <3-7. 구구단 화면 만들기>

var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

// 역시 이벤트리스너가 반복문 역할을 한다. 하지만, 이벤트리스너가 항상 반복문 역할을 하는 것은 아니다.
폼.addEventListener('submit', function 콜백함수 (e) {
    e.preventDefault();
    // 오류확인을 위해 console.log(결과, 입력창.value);
    if (결과 === Number(입력창.value)){  // <input type = 'text'>이기 때문에 Number을 씌워준다.
        결과창.textContent = '딩동댕';
        숫자1 = Math.ceil(Math.random() * 9);
        숫자2 = Math.ceil(Math.random() * 9);
        결과 = 숫자1 * 숫자2;
        단어.textContent = String(숫자1) + '곱하기' + String(숫자2) +'는?';
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
})


// while (true) {
//     var 숫자1 = Math.ceil(Math.random() * 9)
//     var 숫자2 = Math.ceil(Math.random() * 9) 
//     var 결과 = 숫자1 * 숫자2
//     var 조건 = true;
//     while (조건) {
//         var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?')
//         if (결과 === Number(답)) {
//             alert('딩동댕');
//             조건 = false;      //정답을 맞출경우 컴퓨터가 문제를 다시 내야 하므로
//         } else {
//             alert('땡');    
//         }
//     }
// }