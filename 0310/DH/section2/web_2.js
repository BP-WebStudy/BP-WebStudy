var num1 = Math.ceil(Math.random()*9);
var num2 = Math.ceil(Math.random()*9);
var 결과 = num1 * num2;

var 바디 = document.body;
var div = document.createElement('div');
div.textContent = String(num1)+'x'+String(num2)+'는?';
document.body.append(div);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input'); 
// 입력창.type('number'); = input type을 숫자 형식으로 바꿀 수 있다. 
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent='정답?';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(e){
    e.preventDefault();

    if(Number(입력창.value) === 결과){
        결과창.textContent = '딩동댕';
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random() * 9);
        결과 = num1 * num2;
        div.textContent = String(num1)+'x'+String(num2)+'는?';
        입력창.value= '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value= '';
        입력창.focus();
    }
});

