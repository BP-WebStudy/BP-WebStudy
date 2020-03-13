var body = document.body;
var table = document.createElement('table'); // table, tr, td는 3*3 구조를 만들고
var 줄들 =[]; // 줄들, 칸들은 테이블 내부에 실질적으로 들어갈 데이터(O,X)를 보여주기 위해
var 칸들 = []; // 만들어졌다.
var 턴 = 'X';

function 비동기함수 (e) {
    var 몇줄 = 줄들.indexOf(e.target.parentNode);
    console.log('몇줄 :', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(e.target);
    console.log('몇칸 :', 몇칸);
    if (칸들[몇줄][몇칸].textContent !== '') {
        console.log('빈칸이 아닙니다');
    } else {
        console.log('빈칸입니다');
        칸들[몇줄][몇칸].textContent = 턴;
        다참 = false;
        if (칸들[몇줄][0].textContent === 턴 && 
            칸들[몇줄][1].textContent === 턴 &&
            칸들[몇줄][2].textContent === 턴) { // 가로 다참
                다참 = true;
        }
        if (칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴) { // 세로 다참
                다참 = true;
        }
        if (몇줄 - 몇칸 === 0) { // 대각선 다참 ==> 대각선은 경우의 수가 2가지이다. 
            if (칸들[0][0].textContent === 턴 && // 줄,칸의 인덱스가 같은 경우, (줄 - 칸)의 절댓값이 2인 경우       
                칸들[1][1].textContent === 턴 &&
                칸들[2][2].textContent == 턴) {
                    다참 = true;
            } 
        };
        if (Math.abs(몇줄 - 몇칸) === 2) {
            if (칸들[2][0].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[0][2].textContent === 턴) {
                    다참 = true;
                }
        };
        if (다참) {
            console.log(턴 + '님이 승리하셨습니다!');
            div.textContent = 턴 + '님이 승리하셨습니다!';
            다참 = false;
            턴 = 'X';
            칸들.forEach(function (row) {
                row.forEach(function(column) {
                    column.textContent = '';
                });
            });
        } else {
            if (턴 === 'X') {
                턴 = 'O';
            } else {
                턴 = 'X';
            }
        };
;}
    // 세칸이 다 채워졌나 확인

};

for (var i=1; i<=3; i++) {
    var row = document.createElement('tr');
    줄들.push(row) // 줄들 = [tr,tr,tr] => 클릭된 칸이 속해있는 줄이 몇번째 줄인지 확인하기 위해 만듦.
    칸들.push([]);
    for (var j=1; j<=3; j++) {
        var column = document.createElement('td');
        column.addEventListener('click', 비동기함수);
        row.append(column);
        칸들[i-1].push(column);// 칸들 = [[td,td,td],
    }                          //         [td,td,td],
    table.append(row)          //         [td,td,td] ]
}
body.append(table);
var div = document.createElement('div');
body.append(div);
