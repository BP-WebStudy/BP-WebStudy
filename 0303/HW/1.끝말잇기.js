// 목숨 3개
// 5초 안에 답변을 못 할 시 목숨 -1, 게임재시작(시작단어 랜덤선택)
// alert창을 통해 정답, 오답을 알려준다.


var chance = 3;
var initialWordList = ['학교', '교수', '재벌', '컴퓨터'];

// var time = 1;
// var timer = setInterval(function(answer) {
//     console.log(time)
//     if (time === 10) {
//         alert('시간초과');
//         chance -= 1;
//         randomChoice(initialWordList);
//     }
//     if (start[start.length-1] === answer[0] && answer.length <= 3) {
//         alert('Correct');
//         start = answer
//     }
//     else if (answer.length > 3) {
//         alert('최대 3음절입니다!')
//         chance -= 1;
//     }
//     else {
//         alert('Wrong')
//         chance -= 1;
//     }    
//     time += 1;
// }, 1000);

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}


var start = randomChoice(initialWordList)
while ( chance !== 0 ) {
    var answer = prompt(start)
    if (start[start.length-1] === answer[0] && answer.length <= 3) {
        alert('Correct');
        start = answer
    }
    else if (answer.length > 3) {
        alert('최대 3음절입니다!')
        chance -= 1;
    }
    else {
        alert('Wrong')
        chance -= 1;
    }    
}
alert('Game Over');
