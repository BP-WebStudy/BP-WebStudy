// <7-1. 가위바위보(이미지 스프라이트)
// setInterval는 0.1초마다 계속실행, 반복되는 간격
// setTimeout는 0.1초에 한번 실행하고 끝남

var 이미지좌표 = 0;
// <7-2. 딕셔너리 자료구조>
// 자바스크립트 객체는 딕셔너리 자료구조 역할을 할 수 있다. 1:1 매칭을 표현한다.
var 가위바위보 = { // 딕셔너리 자료구조
    바위: '0',         
    가위: '-142px',
    보: '-284px'
    /* (1대 다일때 2가지 경우)
    바위: ['0', '바위', 'rock'],
    바위 : {
        한국어: '바위',
        영어: 'rock',
        값: '0'
    },
    */
};

// <7-3. Object, entries, find, findIndex>
// Object.entries(객체)로 객체를 배열로 바꿀 수 있다.
// 배열.find는 반복문이지만 원하는 것을 찾으면(return이 true) 멈춥니다.

// 이미지좌표을 숫자가 아닌 문자로 보이게 하기 위해
// var 가위바위보2 = {
//     '0': '바위',
//     '-142px': '가위',
//     '-284px': '보',
// } 는 하드코딩으로 밑에처럼 코딩하기!


// console.log(Object.entries(가위바위보));
function 컴퓨터의선택(이미지좌표) {
    return Object.entries(가위바위보).find(function(v) { //1차원배열일때는 indexOf, 2차원배열일때는 find와 findIndex를 자주사용
        return v[1] === 이미지좌표;  //return?
    })[0];
}
// var 찾기 = Object.entries(가위바위보).find(function(v) { //1차원배열일때는 indexOf, 2차원배열일때는 find와 findIndex를 자주사용
//     console.log(v);
//     return v[0] === '보';
// });
// console.log(찾기); 대신 위에껄로!


// <7-4. setTimeout, clearTimeout>
var 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(function () {
        if (이미지좌표 === 가위바위보.바위) {
            이미지좌표 = 가위바위보.가위;
        } else if (이미지좌표 === 가위바위보.가위) {
            이미지좌표 = 가위바위보.보;
        } else {
            이미지좌표 = 가위바위보.바위;
        }
        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
    }, 100);
}

인터벌메이커();


// <7-5. 가위바위보 규칙 찾기>
// 여러 개의 딕셔너리 자료구조가 서로 비슷한 경우 하나로 합쳐주면 더 좋다
var 점수표 = {
    가위: 1,
    바위: 0,
    보: -1,
};

// var 인터벌 = setInterval(function () {
//     if (이미지좌표 === 가위바위보.바위) {
//         이미지좌표 = 가위바위보.가위;
//     } else if (이미지좌표 === 가위바위보.가위) {
//         이미지좌표 = 가위바위보.보;
//     } else {
//         이미지좌표 = 가위바위보.바위;
//     }
//     /*
//     if (left === 0) {
//         left = '-142px';
//     } else if (left === '-142px') {
//         left = '-284px';
//     } else {
//         left = 0;
//     }
//     */
//     document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
// }, 100);


// queryselectorAll은 반복문을 돌려야한다. forEach 사용
document.querySelectorAll('.btn').forEach(function(btn) {  //class는 비슷한 역할을 할 경우 묶어준다.
    btn.addEventListener('click', function() {
        clearInterval(인터벌);  // clearInterval로 setInterval을 멈춘다.
        setTimeout(function() {  // 1초후에 다시 움직이기
            인터벌메이커();
        }, 1000);
        var 나의선택 = this.textContent;
        // console.log(나의선택, 컴퓨터의선택(이미지좌표));
// <7-6. 변수를 사용해 중복 제거하기>
//변수를 사용해 중복되는 것을 제거한다        
        var 나의점수 = 점수표[나의선택];
        var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
        var 점수차 = 나의점수 - 컴퓨터점수;
        if (점수차 === 0) {
            // 점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] === 0
            console.log('비겼습니다.');
        } else if ([-1, 2].includes(점수차)) {  // 배열.includes로 || 관계를 줄일 수 있다!
            // 점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] === 1 || 점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] === 0
            console.log('이겼습니다!');
        } else {
            console.log('졌습니다 ㅠㅠ');
        }

        // if (나의선택 === '가위') {
        //     if (컴퓨터의선택(이미지좌표) === '가위') {
        //         console.log('비겼습니다.');
        //     } else if (컴퓨터의선택(이미지좌표) === '바위') {
        //         console.log('졌습니다 ㅠㅠ');
        //     } else {
        //         console.log('이겼습니다!');
        //     }
        // } else if (나의선택 === '바위') {
        //     if (컴퓨터의선택(이미지좌표) === '가위') {
        //         console.log('이겼습니다!');
        //     } else if (컴퓨터의선택(이미지좌표) === '바위') {
        //         console.log('비겼습니다.');
        //     } else {
        //         console.log('졌습니다 ㅠㅠ');
        //     }
        // } else if (나의선택 === '보') {
        //     if (컴퓨터의선택(이미지좌표) === '가위') {
        //         console.log('졌습니다 ㅠㅠ');
        //     } else if (컴퓨터의선택(이미지좌표) === '바위') {
        //         console.log('이겼습니다!');
        //     } else {
        //         console.log('비겼습니다.');
        //     }
        // }
    });
});

// 가위:1, 바위:0, 보:-1
// 나\컴퓨터        가위  바위   보
//           가위   1 1   1 0   1 -1  
//           바위   0 1   0 0   0 -1
//            보   -1 1  -1 0  -1 -1