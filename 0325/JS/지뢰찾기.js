// // <8-1. 지뢰찾기 기본 화면>
// //입력받은 hor, ver 값에 따라 동적으로 tr, td 생성!
// //데이터와 화면을 일치시켜야한다.
// var tbody = document.querySelector("#table tbody");
// var dataset = [];
// document.querySelector("#exec").addEventListener("click", function() {
//     //내부 먼저 초기화(실행 누를 때 새 게임이 계속 나오도록)
//     tbody.innerHTML = '';
//     var hor = parseInt(document.querySelector("#hor").value);
//     var ver = parseInt(document.querySelector("#ver").value);
//     var mine = parseInt(document.querySelector("#mine").value);
//     console.log(hor, ver, mine);

// // <8-2. 지뢰 심기>
//     // 지뢰 위치 뽑기
//     var 후보군 = Array(hor*ver)
//         .fill()
//         .map(function (요소, 인덱스) {
//             return 인덱스;
//         });
//     var 셔플 = [];

//     while (후보군.length > 80) {
//         var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
//         셔플.push(이동값);
//     }
//     // 피셔예이츠 셔플로 지뢰를 심을 20개 위치를 뽑아요

//     console.log(셔플);

//     //<8-3. 우클릭으로 깃발 꼽기>
//     // 지뢰 테이블 만들기
//     for(var i = 0; i < ver; i += 1) {
//         var arr = [];
//         var tr = document.createElement("tr");
//         dataset.push(arr);
//         for (var j = 0; j < hor; j += 1) {
//             arr.push(1);
//             var td = document.createElement("td");
//             td.addEventListener("contextmenu", function(e){   //마우스 오른쪽 클릭 이벤트는 contextmenu 이벤트이다.
//                 e.preventDefault();
//                 var 부모tr = e.currentTarget.parentNode;
//                 var 부모tbody = e.currentTarget.parentNode.parentNode;
//                 //배열이 아닌 애들도 indexOf를 쓸 수 있게 하는 방법은 Array.prototype.indexOf.call
//                 // e.currentTarget, e.target;
//                 var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);  //td대신 e.currentTarget을 쓴다
//                 var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
//                 // console.log(부모tr, 부모tbody, e.currentTarget, 칸, 줄);
//                 // e.currentTarget.textContent = "!";
//             //<8-5. 물음표 기능과 중간 정리>
//                 if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X'){
//                     e.currentTarget.textContent = '!';
//                 } else if (e.currentTarget.textContent === '!') {
//                     e.currentTarget.textContent = "?";
//                 } else if (e.currentTarget.textContent === "?") {
//                     if (dataset[줄][칸] === 1) {
//                         e.currentTarget.textContent = '';
//                     } else if (dataset[줄][칸] === 'X') {
//                         e.currentTarget.textContent = 'X';
//                     }
//                 }
//             //concat은 배열과 배열을 합쳐서 새로운 배열을 만든다.
//             });
//             td.addEventListener('click', function (e) {
//             //<8-6. 주변 지뢰 개수 세기>
//                 //클릭했을때 주변 지뢰 개수
//                 var 부모tr = e.currentTarget.parentNode;
//                 var 부모tbody = e.currentTarget.parentNode.parentNode;
//                 var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
//                 var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
//                 if (dataset[줄][칸] == 'X') {
//                     e.currentTarget.textContent = '펑';
//                 } else {
//                     var 주변 = [
//                         dataset[줄][칸-1], dataset[줄][칸+1],
//                     ];
//                     if (dataset[줄-1]) {
//                         주변 = 주변.concat([dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]]);
//                     }
//                     if (dataset[줄+1]) {
//                         주변 = 주변.concat([dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]]);
//                     }
//                     console.log(주변);
//                     e.currentTarget.textContent = 주변.filter(function(v) {
//                         return v === 'X';
//                     }).length;
//                 }
//             })  
//             tr.appendChild(td);
//         }
//         tbody.appendChild(tr);
//     }
    
//     //지뢰 심기
//     for (var k = 0; k < 셔플.length; k++) {  // 예 60
//         var 세로 = Math.floor(셔플[k] / 10);  // 예 7 -> 6
//         var 가로 = 셔플[k] % 10;  // 예 0 -> 0
//         console.log(세로, 가로);
//         tbody.children[세로].children[가로].textContent = "X";
//         dataset[세로][가로] = "X";        
//     }
//     // console.log(dataset);
// });

// //<8-4. target VS e.currentTarget>
// //eventlistener을 직접 달은게 currentarget , event가 실제로 발생하는 애가 target
// tbody.addEventListener("contextmenu", function(e) {
//     console.log("커런트타겟", e.currentTarget);
//     console.log("타겟", e.target);
// });

var dataset = [];
var tbody = document.querySelector('#table tbody');
var 중단플래그 = false;
var 열은칸 = 0;
var 코드표 = {
  연칸: -1,
  물음표: -2,
  깃발: -3,
  깃발지뢰: -4,
  물음표지뢰: -5,
  지뢰: 1,
  보통칸: 0,
};

document.querySelector('#exec').addEventListener('click', function() {
  // 내부 먼저 초기화
  tbody.innerHTML = '';
  document.querySelector('#result').textContent = '';
  dataset = [];
  열은칸 = 0;
  중단플래그 = false;
  var hor = parseInt(document.querySelector('#hor').value);
  var ver = parseInt(document.querySelector('#ver').value);
  var mine = parseInt(document.querySelector('#mine').value);

  // 지뢰 위치 뽑기
  var 후보군 = Array(hor * ver)
    .fill()
    .map(function (요소, 인덱스) {
      return 인덱스;
    });
  var 셔플 = [];

  while (후보군.length > hor * ver - mine) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
  }

  console.log(셔플);
  // 지뢰 테이블 만들기
  for (var i = 0; i < ver; i += 1) {
    var arr = [];
    var tr = document.createElement('tr');
    dataset.push(arr);
    for (var j = 0; j < hor; j += 1) {
      arr.push(코드표.보통칸);
      var td = document.createElement('td');
      td.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        if (중단플래그) {
          return;
        }
        var 부모tr = e.currentTarget.parentNode;
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
        var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
        if (dataset[줄][칸] === 코드표.연칸) { // 이미 연 칸은 오른쪽 눌러도 효과 없게
          return;
        }
        if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
          e.currentTarget.textContent = '!';
          e.currentTarget.classList.add('flag');
          if (dataset[줄][칸] === 코드표.지뢰) {
            dataset[줄][칸] = 코드표.깃발지뢰;
          } else {
            dataset[줄][칸] = 코드표.깃발;
          }
        } else if (e.currentTarget.textContent === '!') {
          e.currentTarget.textContent = '?';
          e.currentTarget.classList.remove('flag');
          e.currentTarget.classList.add('question');
          if (dataset[줄][칸] === 코드표.깃발지뢰) {
            dataset[줄][칸] = 코드표.물음표지뢰;
          } else {
            dataset[줄][칸] = 코드표.물음표;
          }
        } else if (e.currentTarget.textContent === '?') {
          e.currentTarget.classList.remove('question');
          if (dataset[줄][칸] === 코드표.물음표지뢰) {
            e.currentTarget.textContent = 'X';
            dataset[줄][칸] = 코드표.지뢰;
          } else {
            e.currentTarget.textContent = '';
            dataset[줄][칸] = 코드표.보통칸;
          }
        }
      });
      td.addEventListener('click', function (e) {
        if (중단플래그) {
          return;
        }
        var 부모tr = e.currentTarget.parentNode;
        var 부모tbody = e.currentTarget.parentNode.parentNode;
        var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
        var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
        if ([코드표.연칸, 코드표.깃발, 코드표.깃발지뢰, 코드표.물음표지뢰, 코드표.물음표].includes(dataset[줄][칸])) {
          return;
        }
        // 클릭했을때
        e.currentTarget.classList.add('opened');
        열은칸 += 1;
        if (dataset[줄][칸] === 코드표.지뢰) { // 지뢰 클릭
          e.currentTarget.textContent = '펑';
          document.querySelector('#result').textContent = '실패 ㅠㅠ';
          중단플래그 = true;
        } else { // 지뢰가 아닌 경우 주변 지뢰 개수
          var 주변 = [
            dataset[줄][칸-1], dataset[줄][칸+1],
          ];
          if (dataset[줄-1]) {
            주변 = 주변.concat([dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]]);
          }
          if (dataset[줄+1]) {
            주변 = 주변.concat([dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]]);
          }
          var 주변지뢰개수 = 주변.filter(function(v) {
            return [코드표.지뢰, 코드표.깃발지뢰, 코드표.물음표지뢰].includes(v);
          }).length;
          // 거짓인 값: false, '', 0, null, undefined, NaN
          e.currentTarget.textContent = 주변지뢰개수 || '';
          dataset[줄][칸] = 코드표.연칸;
          if (주변지뢰개수 === 0) {
            console.log('주변을 엽니다');
            var 주변칸 = [];
            if (tbody.children[줄-1]) {
              주변칸 = 주변칸.concat([
                tbody.children[줄 - 1].children[칸 - 1],
                tbody.children[줄 - 1].children[칸],
                tbody.children[줄 - 1].children[칸 + 1],
              ]);
            }
            주변칸 = 주변칸.concat([
              tbody.children[줄].children[칸 - 1],
              tbody.children[줄].children[칸 + 1],
            ]);

            if (tbody.children[줄+1]) {
              주변칸 = 주변칸.concat([
                tbody.children[줄 + 1].children[칸 - 1],
                tbody.children[줄 + 1].children[칸],
                tbody.children[줄 + 1].children[칸 + 1],
              ]);
            }
            주변칸.filter(function (v) {
              return !!v;
            }).forEach(function(옆칸) {
              var 부모tr = 옆칸.parentNode;
              var 부모tbody = 옆칸.parentNode.parentNode;
              var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children, 옆칸);
              var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
              if (dataset[옆칸줄][옆칸칸] !== 코드표.연칸) {
                옆칸.click();
              }
            });
          }
        }
        console.log(열은칸, hor * ver - mine);
        if (열은칸 === hor * ver - mine) {
          중단플래그 = true;
          document.querySelector('#result').textContent = '승리 ^^';
        }
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  // 지뢰 심기
  for (var k = 0; k < 셔플.length; k++) { // 예 60
    var 세로 = Math.floor(셔플[k] / ver);  // 예 7 -> 6
    var 가로 = 셔플[k] % ver; // 예 0 -> 0
    console.dir(tbody);
    console.log(세로);
    tbody.children[세로].children[가로].textContent = 'X';
    dataset[세로][가로] = 코드표.지뢰;
  }
});