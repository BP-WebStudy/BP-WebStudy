var body = document.body;

var candidate;
var number;

function select_number() {
    candidate = [1,2,3,4,5,6,7,8,9];
    number = [];
    for (var i=0; i<4; i++) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9-i)),1)[0];
        //splice는 (index, 갯수)를 파라미터로 갖는다. 9에서 i를 빼는 이유는 
        //candidate 배열에서 원소가 하나씩 줄어들기 때문에 indexing할 수 있는 값도 하나씩 줄어야 한다.
        //[Math.floor(Math.random() * 9)를 했을 때 나오는 값은 0~8]
        number.push(chosen);
    }
    return number;
};

var strike_ball = document.createElement('h1');
body.append(strike_ball);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.type = 'text';
input.maxLength = 4;
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var wrong_count = 0;
var plz = select_number();

input.focus();
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === plz.join('')) {
        strike_ball.textContent = '홈런';
        input.value = '';
        input.focus();
        candidate = [1,2,3,4,5,6,7,8,9];
        number = [];
        plz = select_number();
        wrong_count = 0;
    } else {
        let strike = 0;
        let ball = 0;
        wrong_count += 1;
        console.log(wrong_count)
        if (wrong_count > 10) {
            wrong_count = 0;
            strike_ball.textContent = '주어진 횟수를 모두 사용하였습니다.\n답은:' + number.join(',');
            input.value = '';
            input.focus();
            plz = select_number();
        } else {
            for (var i = 0; i < plz.length; i++) {
                if (answer.split('')[i] === String(plz[i])) {
                //answer.split('')을 통해 인덱싱하거나 answer[i] 이런 식으로 해도 결과는 같다.
                    strike += 1;
                } else if (plz.includes(Number(answer[i]))) {
                    ball += 1;
                }
            }
            strike_ball.textContent = String(strike) + '스트라이크 ' + String(ball) +'볼';
            console.log(input.value, strike,'스트라이크 ',ball ,'볼');
            input.value = '';
            input.focus();
        }
    }
    
});