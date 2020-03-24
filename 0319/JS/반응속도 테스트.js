// <9-1. 반응속도 테스트>
// class는 여러 스타일을 한 번에 적용할 수 있어 좋다.
var 스크린 = document.querySelector('#screen');

// <9-2. 시간 체크와 예약어>
// new Date()를 하는 순간 그 시각이 저장된다.
// 예약어(파란색 보라색)는 변수명으로는 못 쓴다.

/* (시간체크 3가지)
1. var 시작시간 = new Date();  //현재시간 기록
   var 끝시간 = new Date();  //끝시간 기록
   console.log((끝시간 - 시작시간) / 1000);

2. console.time('시간');
   console.timeEnd('시간');

3. var 시작시간 = performance.now();  // 정밀한 시간,   보통은 new Date();사용
   var 끝시간 = performance.now();
   console.log((끝시간 - 시작시간) / 1000);      */

// <9-3. 호출 스택(call stack)>
//비동기 함수 바깥에 변수들을 선언해 주는것이 좋음
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;

스크린.addEventListener('click', function() {
    if (스크린.classList.contains('waiting')) { // 현재 대기 상태인지 파악   // classList.contains로 현재 클래스를 파악 가능
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';    
        타임아웃 = setTimeout(function() {
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000);  // 2000 ~ 3000 사이 수
   } else if (스크린.classList.contains('ready')) { // 준비 상태
// <9-4. 타이머 제거>  // !는 true -> false, false -> true로 바꾸는 연산자이다. (undefined, 0, NaN, null, false, '')
       if (!시작시간) { // 부정 클릭    
         clearTimeout(타임아웃);   //setTimeout을 취소
         스크린.classList.remove('ready');
         스크린.classList.add('waiting');
         스크린.textContent = '너무 성급하시군요!';
        } else {
         스크린.classList.remove('ready');
         스크린.classList.add('now');
         스크린.textContent = '클릭하세요!';
       }
   } else if (스크린.classList.contains('now')) { // 시작 상태
       끝시간 = new Date();
       console.log('반응속도', 끝시간 - 시작시간, 'ms');
       기록.push(끝시간 - 시작시간);
       시작시간 = null;
       끝시간 = null;
       스크린.classList.remove('now');
       스크린.classList.add('waiting');
       스크린.textContent = '클릭해서 시작하세요.';
   }
});

/* 재귀
function a() {
  a();
}

a();
*/  // Maximum call stack exceeded에러!
