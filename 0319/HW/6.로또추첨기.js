var 후보군 = Array(45); // [empty * 45] ==> 반복문 불가
var 필 = 후보군.fill();

필.forEach(function(요소, 인덱스) {
    필[인덱스] = 인덱스 + 1;    
});

var 맵 = 필.map(function(요소, 인덱스) { //map메소드의 콜백함수의 파라미터 순서 => (요소, 인덱스) 
    return 인덱스 + 1;
});

var 후보 = Array(45).fill().map(function(요소,인덱스) {
    return 인덱스 + 1
});

var 셔플 = [];
while (후보.length > 0) {
    var 이동값 = 후보.splice(Math.floor(Math.random() * 후보.length), 1)[0];
    셔플.push(이동값);
};
var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플.slice(0,6).sort(function(p,c) { return p-c });
 // 0,1,2,3,4,5번째 자리까지의 숫자를 가져옴; 
// sort() ==> [2, 12, 3] 이러한 배열이 있다고 했을 때 sort()는 [12,2,3]의 순서로 소팅을 한다. 
// sort(function(p,c) { return p-c }) ==> 이 경우 오름차순 정렬 sort(function(c,p) { return c-p }) ==> 내림차순 정렬

console.log('당첨숫자들 : ', 당첨숫자들, '보너스 : ', 보너스);

var 결과창 = document.getElementById('결과창');
// var 결과창 = document.querySelector('#결과창'); 도 같은 역할을 한다.


function 공색칠하기 (숫자, 결과창) {
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
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
    공.className = '공아이디' + 숫자; 
    결과창.append(공);
};


setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[0], 결과창);
}, 1000);

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
    var 보너스칸 = document.getElementsByClassName('보너스')[0];  // querySelector('.보너스');
    공색칠하기(보너스, 보너스칸);
},7000);

