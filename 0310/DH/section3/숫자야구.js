// 동기: 코드 상 순서대로 실행되는 코드, <-> 비동기 
// 스트라이크 : 숫자와 자리까지 맞았을때, 볼: 자리는 틀렸지만 숫자는 맞았을때

 // 배열.shift() : 앞에서부터 하나씩 pop 
 // 배열.unshift() : 뽑은 것을 역순으로 push 
 // 배열.splice(위치,개수) : '위치'번째 자리부터 '개수'개 뽑기
// splice는 배열을 반환하기 때문에 [0]을 이용해서 배열의 첫번째를 선택할수있게한다. 


var 바디 = document.body;

var 숫자후보;
var 숫자배열;

function 초기화(){

    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];

    for(var i = 0; i<4; i+=1 ){ 
        var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)),1)[0]; 
        숫자배열.push(뽑은것);
    }

}

초기화();
console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);

var 폼 = document.createElement('form');
바디.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);

var 틀린횟수= 0;
폼.addEventListener('submit', function 콜백함수(e){ // 엔터를 쳤을 때
    e.preventDefault();

    var 답 = 입력창.value;
    console.log(답, 숫자배열, 답=== 숫자배열);

    if(답===숫자배열.join('')){
        결과.textContent = '홈런';
        입력창.value='';
        입력창.focus();
        초기화();
        // 함수로 만들어주면 반복이 줄어든다.
    } else {

        var 답배열 = 답.split('');
        var 스트라이크 = 0;
        var 볼 = 0;
        틀린횟수 += 1;
        console.log('현재 틀린횟수는 '+틀린횟수+'번 입니다.');

        if(틀린횟수>10){
            결과.textContent = '10번 넘게 틀려서 실패! 답은'+숫자배열.join('')+'였습니다..';
            입력창.value = '';
            입력창.focus();
            초기화();
            틀린횟수 = 0;

        } else {

            console.log('홈런이 아니라면,', 답배열);
            for(var i=0; i<4; i++){
                if(Number(답배열[i]) === 숫자배열[i]){
                    console.log('스트라이크!');
                    스트라이크+=1;
                } else if(숫자배열.indexOf(Number(답배열[i])) > -1){
                    console.log('볼!');
                    볼+=1;
                }
            }

            결과.textContent = 스트라이크+'스트라이크'+' '+볼+'볼 입니다.';
            입력창.value='';
            입력창.focus();

       }
    }

})

// 배열.join(구분자); -> 문자
// 문자.split(구분자); -> 배열 