var first = Math.ceil(Math.random() * 9);
var second = Math.ceil(Math.random() * 9);
var answer = first * second;


var body = document.body;
var div1 = document.createElement('div');
div1.textContent = String(first) + '*' + String(second) +'= ?';
body.append(div1)
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var result = document.createElement('div');
body.append(result);

input.focus();
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (answer === Number(input.value)) {
        result.textContent = '정답';
        first = Math.ceil(Math.random() * 9);
        second = Math.ceil(Math.random() * 9);
        answer = first * second;
        div1.textContent = String(first) + '*' + String(second) + '= ?';
        input.value = '';
        input.focus();
    } else {
        result.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
