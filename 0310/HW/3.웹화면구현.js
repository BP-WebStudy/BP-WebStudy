var body = document.body;
var word = document.createElement('div');
word.textContent = '욱';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form)

var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

var result = document.createElement('div');
document.body.append(result);

input.focus();
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (word.textContent[word.textContent.length-1] === input.value[0]) {
        result.textContent = '정답';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        result.textContent = '땡';
        input.value = '';
        input.focus();        
    }
})