// e.target === 클릭된 애
// e.target.parentNode === 클릭된 애 부모 태그 

var 바디 = document.body;
var 테이블 = document.createElement('table');

var 턴 = 'X';
var 줄들 = [];
var 칸들 = [];
var 결과 = document.createElement('div');

function 결과체크(몇줄,몇칸){
    // 세칸 다 채워졌는가?
    var 승리여부 = false;

    // 가로줄 검사
    if (
        칸들[몇줄][0].textContent === 턴 && 
        칸들[몇줄][1].textContent === 턴 && 
        칸들[몇줄][2].textContent === 턴
    ){
        승리여부 = true;
    }
    // 세로줄 검사
    if ( 
        칸들[0][몇칸].textContent === 턴 &&
        칸들[1][몇칸].textContent === 턴 &&
        칸들[2][몇칸].textContent === 턴 
    ){
        승리여부 = true;
    }
    // 대각선 검사

    if(
            칸들[0][0].textContent === 턴 &&
            칸들[1][1].textContent === 턴 &&
            칸들[2][2].textContent === 턴 
    ){ 승리여부 = true; }

    if(
            칸들[0][2].textContent === 턴 &&
            칸들[1][1].textContent === 턴 &&
            칸들[2][0].textContent === 턴 
    ){ 승리여부 = true; }

        return 승리여부; 
}

function 초기화 (무승부){    //초기화
    if(무승부){
        결과.textContent = '무승부';
    }else{
        결과.textContent = 턴 + '님이 승리!';
    }
    setTimeout(function(){
        결과.textContent = '';
        칸들.forEach(function (줄){
            줄.forEach(function (칸){
                칸.textContent = '';
            });
        });
        턴='X';
    },1000);
}

var 비동기콜백 = function(e){
    if( 턴 === 'O'){
        return;
    } // 컴퓨터의 턴일때 내가 클릭하지 못하도록 ,
    //  console.log(e.target); // 칸
    //  console.log(e.target.parentNode); // 줄
    //  console.log(e.target.parentNode.parentNode); // 테이블

    var 몇줄 = 줄들.indexOf(e.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(e.target);

    if(칸들[몇줄][몇칸].textContent !== ''){
         console.log('빈칸 아닙니다.');
    } else {
         console.log('빈칸입니다.');
         칸들[몇줄][몇칸].textContent = 턴;

        var 승리여부 = 결과체크(몇줄,몇칸);

        var 후보칸 = [];
        칸들.forEach(function (줄){
            줄.forEach(function (칸){
                후보칸.push(칸);
            });
        });
        후보칸 = 후보칸.filter(function (칸){
            return !칸.textContent });

        if(승리여부){
            초기화();
        } else if( 후보칸.length === 0){
            초기화(true);
        } 
        else { // 다 안찼으면, 
            if(턴==='X'){
                턴 = 'O';
            }

             setTimeout(function(){
                 console.log('컴퓨터의 턴입니다.');
                 // 빈칸 중 하나를 고른다.
                 var 선택칸 = 후보칸[Math.floor(Math.random()* 후보칸.length)];
                 선택칸.textContent = 턴;
                 //컴퓨터가 승리했는지 체크
                 var 몇줄 = 줄들.indexOf(선택칸.parentNode);
                 var 몇칸 = 칸들[몇줄].indexOf(선택칸);
                 var 승리여부 = 결과체크(몇줄,몇칸);
                 //다 찼으면
                 if(승리여부){
                     결과.textContent = 턴 + '님이 승리!';
                     초기화();
                 }
                 //턴을 나한테 넘긴다.
                 턴 = 'X';
             },1000);
        }
    }
};

for(var i=1 ; i<=3; i++){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for( var j=1; j<=3; j+= 1){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i-1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}

바디.appendChild(테이블);
바디.appendChild(결과);
console.log('줄들', 줄들, '칸들', 칸들);