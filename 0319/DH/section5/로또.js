// forEach 

// Array(n); 빈 배열 생성, empty로 차있다. ( 반복문 불가! )
var 후보군 = Array(45)
    .fill()
    .map(function(요소,인덱스){
    return 인덱스+1;
});

console.log(후보군);

var 셔플 = [];

while( 후보군.length > 0){

   var 이동값 = 후보군.splice(Math.floor(Math.random()* 후보군.length),1)[0];
    셔플.push(이동값);
}

console.log(셔플);
var 보너스 = 셔플[ 셔플.length -1 ];
var 당첨숫자들 = 셔플
    .slice(0,6)
    .sort(function (p,c) {
         return p-c; }
    ); //  
    // slice(a,b) : a번째부터 b번째까지 배열을 자르는 함수
    // 당첨숫자들.sort(function (p,c) { return p-c; }) : 오름차순
    // 당첨숫자들.sort(function (p,c) { return c-p; }) : 내림차순
    
    console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);

    var 결과창 = document.getElementById('결과창');

        function 공색칠(숫자,결과창){

            var 공 = document.createElement('div');
            공.textContent = 숫자;
            공.style.display = 'inline-block';
            공.style.border = '1px solid black';
            공.style.borderRadius = '10px';
            공.style.width = '20px';
            공.style.height = '20px';
            공.style.textAlign = 'center';
            공.style.marginRight= '10px';
            공.style.borderBottomWidth = '10px';
            공.style.fontSize = '20px';

            공.className = '공아이디' + 숫자;
            var 배경색;

            if(숫자 <= 10) {
                배경색 = 'red';
            }else if(숫자 <= 20){
                배경색 = 'orange';
            }else if(숫자 <= 30){
                배경색 = 'yellow';
            }else if(숫자 <= 40){
                배경색 = 'blue';
            }else {
                배경색 = 'green';
            }

            공.style.backgroundColor = 배경색;
            결과창.appendChild(공);
        }

    setTimeout(function 비동기콜백함수(){  
        공색칠(당첨숫자들[0],결과창);  
    },1000);

    setTimeout(function 비동기콜백함수(){
        공색칠(당첨숫자들[1],결과창);  
    },2000);

    setTimeout(function 비동기콜백함수(){
        공색칠(당첨숫자들[2],결과창);  
    },3000);

    setTimeout(function 비동기콜백함수(){
        공색칠(당첨숫자들[3],결과창);  
    },4000);

    setTimeout(function 비동기콜백함수(){
        공색칠(당첨숫자들[4],결과창);  
    },5000);

    setTimeout(function 비동기콜백함수(){
        공색칠(당첨숫자들[5],결과창);  
    },6000);

 
    // class 는 여러번 중복될 수 있기 때문에 []를 이용해 순서를 가리켜야한다.
    setTimeout(function 비동기콜백함수(){
        var 칸 = document.getElementsByClassName('보너스')[0];

       공색칠(보너스,칸);
    }, 7000 );