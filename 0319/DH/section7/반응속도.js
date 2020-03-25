var 스크린 = document.querySelector('#screen');
var 시작시간;
var 끝시간;
var 기록 = [];
//console.time('시간');
var 타임아웃; 

스크린.addEventListener('click',function(){ 

    //console.timeEnd('시간'); 
    // .time과 .timeend사이의 시간을 계산하고, 변수이름을 같게 해주어야한다. 
    if(스크린.classList.contains('waiting')) { 
        // classList.contains() : 현재 클래스가 무엇인지 알려준다. 
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';

       타임아웃 = setTimeout(function(){
            시작시간 = new Date(); // 현재 시각을 바로 저장
            console.log('시간 지났다!');
            스크린.click();
        },Math.floor(Math.random()*1000) + 2000); // 2000~3000 사이의 수 


    } else if(스크린.classList.contains('ready')) {
        if( !시작시간 ){ // 부정클릭
            clearTimeout(타임아웃);
            스크린.classList.remove('ready');
            스크린.classList.add('waiting');
            스크린.textContent = '너무성급하시군요!';
        }else{
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = '클릭하세요!';
        }

    } else if(스크린.classList.contains('now')) {
        끝시간 = new Date();
        console.log('반응속도', 끝시간 - 시작시간, 'ms');
        기록.push(끝시간 - 시작시간);
        시작시간 = null;
        끝시간 = null;
        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요.';
    }
    
    console.log('클릭!');
})

// 비동기 함수 바깥에 전역변수로 변수들을 생성해주는 것이 좋다. 