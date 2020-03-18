// <4-1. 비동기 & 숫자야구 순서도>
//자바스크립트에서 비동기는 코드 상의 순서대로 실행되지 않는 코드를 의미


// <4-2. 배열 push, pop, shift, unshift>
// push : 마지막에 추가 , 앞에서부터 넣기 
// pop : 마지막 것 뽑기 , 뒤에서부터 뽑기 9,8,7,6 
// unshift : 처음에 추가 , 뒤에서부터 넣기 4,3,2,1
// shift : 처음 것 뽑기 , 앞에서부터 뽑기 1,2,3,4


// <4-3. 배열 splice>
// splice(위치, 개수) 하면 위치로부터 개수만큼 배열에서 뽑는다


var 바디 = document.body;

// <4-6. 리팩토링 & 개념 복습>

var 숫자후보;
var 숫자배열;

function 숫자뽑기() {
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];
    for (var i = 0; i < 4; i += 1) {
        var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];  //splice는 배열로 뽑히므로 [0]을 해줘서 숫자로 만든다.
        숫자배열.push(뽑은것);
    }
}

숫자뽑기();
console.log(숫자배열);


var 결과 = document.createElement('h1');
바디.append(결과);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
입력창.type = 'text';
입력창.maxLength = 4;
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);


var 틀린횟수 = 0;
폼.addEventListener('submit', function 비동기(이벤트) { //엔터를 쳤을 때
    이벤트.preventDefault();
    var 답 = 입력창.value;
    // console.log(답, 숫자배열, 답 === 숫자배열.join(''));
    
// <4-4. split & join>
// 문자.split(구분자) -> 배열
// 배열.join(구분자) -> 문자
   /*  var 숫자배열 = [2,8,7,9];
       String(숫자배열[0]) + String(숫자배열[1]) + String(숫자배열[2]) + String(숫자배열[3]) --> 2879
       숫자배열.join('') --> 2879
       숫자배열.join(',') --> 2,8,7,9
       숫자배열.join(';') --> 2:8:7:9   */

    if (답 === 숫자배열.join('')) { //답이 맞으면  //join을 이용해 숫자배열을 문자로 바꿔준다
        결과.textContent = '홈런';
        입력창.value ='';
        입력창.focus();
        /*  숫자후보 = [1,2,3,4,5,6,7,8,9];
            숫자배열 = [];
            for (var i = 0; i < 4; i += 1){
                var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
                숫자배열.push(뽑은것);
            }    를 대신해서 반복을 줄이기 위해 숫자뽑기() 함수를 사용*/
        숫자뽑기();
        틀린횟수 = 0;
    } else { //답이 틀리면

        // 문자.split(구분자) -> 배열
        /* var 답 = '9546'
           답[0] = '9'
           답.split() --> ['9546']
           답.split('') --> ['9','5','4','6']  */

        var 답배열 = 답.split('');  //split을 이용해 답을 배열로 만들어준다
        var 스트라이크 = 0;
        var 볼 = 0;
        틀린횟수 += 1;
        if (틀린횟수 > 4) { // 4번 넘게 틀린 경우
            결과.textContent = '4번 넘게 틀려서 실패! 답은' + 숫자배열.join(',') + '였습니다!';
            입력창.value = '';
            입력창.focus();
            숫자뽑기();
            틀린횟수 = 0;
        } else { // 4번 미만으로 틀린 경우
            // console.log('답이 틀리면', 답배열);
            for (var i = 0; i < 4; i += 1) {
                if (Number(답배열[i]) === 숫자배열[i]) { // 같은 자리인지 확인
                    // console.log('같은 자리?');
                    스트라이크 += 1;

                // <4-5. indexOf & 숫자야구 구현>
                // 배열.indexOf(값) 값의 위치를 알 수 있다, 없으면 -1
                    /*
                    숫자배열 = [6,8,5,9]
                    숫자배열.indexOf(6) --> 0
                    숫자배열.indexOf(5) --> 2
                    숫자배열.indexOf(4) --> -1
                    */
                } else if (숫자배열.indexOf(Number(답배열[i])) > -1) { // 같은 자리는 아니지만, 숫자가 겹치는지 확인
                    // console.log('겹치는 숫자?');
                    볼 += 1;
                }
            }
            결과.textContent = 스트라이크 + '스트라이크 ' + 볼 + '볼입니다.';
            입력창.value = '';
            입력창.focus();
        }
    }
});