// <5-2. 이차원 배열> : 배열안에 배열이 있으면 2차원 배열

var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];
var 턴 = 'X';
var 결과 = document.createElement('div');

// <5-3. e.target과 parentNode>
// e.target === 클릭된 애
// e.target.parentNode === 클릭된 애 부모 태그

var 비동기콜백 = function(이벤트) {
    // console.log(이벤트.target);  //클릭하면 콘솔에 뜬다.  // 칸
    // console.log(이벤트.target.parentNode);  // 줄
    // console.log(이벤트.target.parentNode.parentNode); //부모의 부모   // 테이블
    // // console.log(이벤트.target.children); // 자식

    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    // input의 값이 value, 태그 안 글자는 textContent
    if (칸들[몇줄][몇칸].textContent !== '') { //칸이 이미 채워져 있는가
        console.log('빈 칸아닙니다.');
    } else { 
        console.log('빈 칸입니다.');
        칸들[몇줄][몇칸].textContent = 턴;
        // 세칸 다 채워졌나?
        var 다참 = false;
        // 가로줄 검사
        if (칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][2].textContent === 턴) {
            다참 = true;
        }
        // 세로줄 검사
        if (칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
            다참 = true;
        }
        // 대각선 검사
        if (몇줄 - 몇칸 === 0) { // 대각선 검사 필요한 경우   // abs는 절댓값
            if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
                다참 = true;            
            }
        }
        if (Math.abs(몇줄 - 몇칸) === 2) { // 대각선 검사 필요한 경우
            if (칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][0].textContent === 턴) {
                다참 = true;
            }
        }

        // 다 찼으면
        if (다참) { // (다참 === true)처럼 === true면 생략 가능  // 이해안감
          결과.textContent = 턴 + '님이 승리!';
          // 초기화
        // <5-5. forEach와 중첩 반복문>
        // 배열의 반복문 forEach
        /*
        [1,2,3,4,5].forEach(function (요소) {
            console.log(요소);
        });  --> 1 2 3 4 5
        */
        // 중첩 반복문 횟수를 줄이는 게 실력!
        // 2차원 배열은 반복문이 최소 2번씩 필요하다.
          턴 = 'X';
          칸들.forEach(function (줄) {
            줄.forEach(function (칸) {  // 모르겠음
              칸.textContent = '';
            });
          });
        } else { // 다 안 찼으면
            if (턴 === 'X') {
                턴 = 'O';
            } else {
                턴 = 'X'; 
            }
        }
    }
};


for (var i = 1; i <= 3; i += 1) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백); //이해안감 실행될때
        칸들[i - 1].push(칸);  // 컴퓨터는 0부터 시작이므로 i - 1   // 이해안감 이부분 
        줄.appendChild(칸);   
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.appendChild(결과);
console.log('줄들', 줄들, '칸들' ,칸들);
