// <6-1. 로또추첨기 Array & fill>

var 후보군 = Array(45);   // Array(숫자)로 빈 배열을 만들 수 있다.  //보통은 []을 써서 배열을 만들고, 양이 많을 경우 Array()를 사용 
console.log(후보군);
var 필 = 후보군.fill();   // 45개의 undefined가 생성
console.log(필);


//empty의 특징을 알아두기! 반복문 불가!
후보군.forEach(function(요소) {
    console.log(요소)
})
// --> undefined   //반복문이 45번 도는게 아닌 한번도 안돌음!




필.forEach(function(요소, 인덱스) {
    필[인덱스] = 인덱스 + 1;  // 0 ~ 44가 1 ~ 45까지로 변경됌
    // console.log(요소, 인덱스 + 1);
});
console.log(필);



// 위에 코드 대신 사용 1 ~ 45까지 뽑기
[undefined, undefined, undefined, undefined, undefined];
[1,2,3,4,5];
// 배열 map메서드 : 1대 1로 매핑
var 맵 = 필.map(function(요소, 인덱스){
    return 인덱스 + 1;
});
console.log(맵);




/*
var 후보군 = Array(45);
var 필 = 후보군.fill();
var 맵 = 필.map(function(요소, 인덱스) {
    return 인덱스 + 1;
});
*/ // 를 대신해 아래처럼 줄일 수 있음
var 후보군 = Array(45).fill().map(function(요소, 인덱스) {
    return 인덱스 + 1;
})
console.log(후보군);


// 1 ~ 45중 6개 뽑기
var 셔플 = [];
while (후보군.length > 0) {  //for문은 자신이 정확하게 몇번 반복문을 돌을지 알 때 , while문은 모를 때와 기준값이 항상 바뀔 때     // 여기서는 기준값이 바뀌므로 while을 사용
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];   //1 ~ 45에서 1개를 뽑기     // 이해 안감!
    셔플.push(이동값);
}
console.log(셔플);

// <6-3. 배열 slice & sort>
var 보너스 = 셔플[셔플.length - 1]; // 마지막 수 뽑기

[7,3,4,8,9,12];

var 당첨숫자들 = 셔플
                .slice(0, 6)
                .sort(function (p, c) { 
                    return p - c;
                }); // slice는 배열을 자르기 0번째 자리부터 6번째자리까지 0,1,2,3,4,5 마지막수는 포함안함
                    // sort는 정렬 , c - p는 내림차순, p - c는 오름차순 
// 뺀 결과가 0보다 크면 순서를 바꾼다!
// 7 - 3 = 4    0보다 크므로 순서를 바꿈
// 7 - 4 = 3
// 7 - 8 = -1    0보다 작으므로 순서를 안바꿈

// (c - p) 일 때
// 3 - 7 = -4
// 4 - 3 = 1
console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);  

// <6-4. JS로 HTML태그 선택하기>
// getElementsByTagName도 있다.(태그 이름으로 찾기)

// var 결과창 = document.getElementById('결과창');

// for (var i = 0; i < 당첨숫자들.length; i += 1) {
//     setTimeout(function 비동기콜백함수() {
//         var 공 = document.createElement('div');
//         공.textContent = 당첨숫자들[i];
//         결과창.appendChild(공);
//     }, 1000); // 순서대로 실행X    //밀리초
// }
// var 보너스칸 = document.getElementsByClassName('보너스')[0];  //class이름으로 태그를 선택,  class는 [0]표시 붙여줘야함
// var 보너스공 = document.createElement('div');
// 보너스공.textContent = 보너스;
// 보너스칸.appendChild(보너스공);

// <6-5. JS로 CSS 조작하기>
//클로저(for문안에 비동기함수가 들어있는 경우) 안쓰고 이렇게 나타내기
// <6-6. 로또추첨기 마무리 & querySelector>
var 결과창 = document.querySelector('#결과창');  // document.getElementById('결과창');
// querySelectorAll도 있음(여러 태그 동시 선택)

function 공색칠하기(숫자, 결과창) {  //다른부분은 매개변수로, 겹치는 부분은 함수로(밑에는 공통부분)
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black'
    공.style.borderRadius = '10px';  //JS에서는 border-radius를 못쓰므로 borderRadius 대문자사용
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';  // -부분을 대문자로 바꾸기
    공.style.fontSize = '12px';
    // 공.id = '공아이디' + 숫자;
    공.className = '공아이디' + 숫자;  // class는 자바스크립트에서 className이라 써야함
    var 배경색;
    if (숫자 <= 10) {
        배경색 = 'red';
    } else if (숫자 <= 20) {
        배경색 = 'orange';
    } else if (숫자 <= 30) {
        배경색 = 'yellow';
    } else if (숫자 <= 40) {
        배경색 = 'blue';
    } else {
        배경색 = 'green';
    }
    공.style.background = 배경색;
    결과창.appendChild(공);

    // var 공 = document.createElement('div');
    // 공.textContent = 당첨숫자들[숫자];
    // 공.style.display = 'inline-block';
    // 공.style.border = '1px solid black'
    // 공.style.borderRadius = '10px'; 
    // 공.style.width = '20px';
    // 공.style.height = '20px';
    // 공.style.textAlign = 'center';
    // 공.style.marginRight = '10px';  
    // 결과창.appendChild(공);
}

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[0], 결과창);

    // var 공 = document.createElement('div');
    // 공.textContent = 당첨숫자들[0];
    // 공.style.display = 'inline-block';
    // 공.style.border = '1px solid black'
    // 공.style.borderRadius = '10px'; 
    // 공.style.width = '20px';
    // 공.style.height = '20px';
    // 공.style.textAlign = 'center';
    // 공.style.marginRight = '10px';  
    // 결과창.appendChild(공);
}, 1000); //1초
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[1], 결과창);
}, 2000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[2], 결과창);
}, 3000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[3], 결과창);
}, 4000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[4], 결과창);
}, 5000);
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[5], 결과창);
}, 6000);

setTimeout(function 비동기콜백함수() {
    var 칸 = document.querySelector('.보너스');  //document.getElementsByClassName('보너스')[0];  //class이름으로 태그를 선택,  class는 [0]표시 붙여줘야함
    공색칠하기(보너스, 칸);
    // var 공 = document.createElement('div');
    // 공.textContent = 보너스;
    // 공.style.display = 'inline-block';
    // 공.style.border = '1px solid black'
    // 공.style.borderRadius = '10px';  //JS에서는 border-radius를 못쓰므로 borderRadius 대문자사용
    // 공.style.width = '20px';
    // 공.style.height = '20px';
    // 공.style.textAlign = 'center';
    // 칸.appendChild(공);
}, 7000);
