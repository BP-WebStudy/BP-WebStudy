// e.target === 클릭된 애
// e.target.parentNode === 클릭된 애 부모 태그 

var 턴 = 'X';

var 줄들 = document.getElementsByTagName('tr'); // nodelist에 담긴다. 
var 칸들 = document.getElementsByTagName('td');

var 비동기콜백 = function(e){

    //  console.log(e.target); // 칸
    //  console.log(e.target.parentNode); // 줄
    //  console.log(e.target.parentNode.parentNode); // 테이블

    var 몇줄 = e.target.parentNode.rowIndex;
    console.log('몇줄', 몇줄);
    var 몇칸 = e.target.cellIndex;
    console.log('몇칸', 몇칸);


    if(e.target.textContent !== ''){
         console.log('빈칸 아닙니다.');
    } else {
         console.log('빈칸입니다.');
         e.target.textContent = 턴;

        // 세칸 다 채워졌는가?
        var 다참 = false;
        // 가로줄 검사
        if (
            칸들[몇줄][0].textContent === 턴 && 
            칸들[몇줄][1].textContent === 턴 && 
            칸들[몇줄][2].textContent === 턴
        ){
            다참 = true;
        }
        // 세로줄 검사
        if ( 
            칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴 
        ){
            다참 = true;
        }
        // 대각선 검사
        if(몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2){ // 대각선 검사 필요한 경우
            if(
                칸들[0][0].textContent === 턴 &&
                칸들[1][1].textContent === 턴 &&
                칸들[2][2].textContent === 턴 
        ){ 다참 = true; }
        }

        
        if(다참){
            console.log(턴+'님의 승리!!');
        } else {
            if(턴==='X'){
                턴 = 'O';
            } else {
                턴 = 'X';
             }
        }
    }
};

for(var i=0 ; i<칸들.length; i++){
    칸들[i].addEventListener('click',비동기콜백);
}