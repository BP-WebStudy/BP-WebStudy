// currenttarget : 이벤트 리스너를 달아놓은 대상
// target : 실제로 리스너가 실행되는 대상

// 태그.classList.add : 태그의 클래스에 접근, 
//add 나 remove로 클래스를 추가하거나 삭제한다. 

// 변수 a || 값 b;
// 변수 a의 값이 거짓인값 ( false, '', 0, null, undefined, NaN ) 이라면 값 b를 출력하라. 

var tbody = document.querySelector('#table tbody');
var dataset = [];
var 중단플래그 = false;
var 열은칸 = 0;
var 코드표 = { 
    연칸: -1,
    물음표: -2,
    깃발: -3,
    깃발지뢰: -4,
    물음표지뢰: -5,
    지뢰:1,
    보통칸:0,
}

document.querySelector('#exec').addEventListener('click', function(){
    // 내부 초기화
    tbody.innerHTML = '';
    dataset = []; 
    document.querySelector('#result').textContent='';
    열은칸 = 0 ;

    var hor= parseInt(document.querySelector('#hor').value);
    var ver= parseInt(document.querySelector('#ver').value);
    var mine= parseInt(document.querySelector('#mine').value);
    console.log(hor,ver,mine);

    // 지뢰 위치 뽑기
    var 후보군 = Array(hor * ver)
    .fill()
    .map(function(요소,인덱스){
        return 인덱스;
    }); // 숫자로 채워진 배열을 만드는 코드, 유용하다! 

    var 셔플 = [];

    while( 후보군.length > hor * ver - mine){
    var 이동값 = 후보군.splice(Math.floor(Math.random()* 후보군.length),1)[0];
        셔플.push(이동값);
    }

    console.log(셔플);

    // 지뢰 테이블 만들기 
    
    for(var i=0; i<ver; i+=1 ){
        var arr=[];
        var tr = document.createElement('tr');
        dataset.push(arr);
         
        for (var j=0; j<hor; j+=1){
            arr.push(코드표.보통칸);
            var td = document.createElement('td');
            
            td.addEventListener('contextmenu',function(e){ 
                e.preventDefault();
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
    
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X' ){
                    e.currentTarget.textContent = '!'; // 깃발 심기 
                    e.currentTarget.classList.add('flag');
                    if( dataset[줄][칸] === 코드표.지뢰){
                        dataset[줄][칸] = 코드표.깃발지뢰;
                    } else {
                        dataset[줄][칸] = 코드표.깃발;
                    }
                }else if (e.currentTarget.textContent === '!'){
                    e.currentTarget.textContent = '?';
                    e.currentTarget.classList.remove('flag');
                    e.currentTarget.classList.add('question');
                    if(dataset[줄][칸] === 코드표.깃발지뢰){
                        dataset[줄][칸] = 코드표.물음표지뢰;
                    }  else {
                        dataset[줄][칸] = 코드표.물음표;
                    }
                }else if( e.currentTarget.textContent === '?'){
                    e.currentTarget.classList.remove('question');
                    if(dataset[줄][칸] === 코드표.물음표지뢰){
                        e.currentTarget.textContent = 'X';
                        dataset[줄][칸] === 코드표.지뢰;
                    } else {
                        e.currentTarget.textContent = '';
                        dataset[줄][칸] = 코드표.보통칸;
                    }
                   
                }
                //깃발이나 ?,! 는 화면에서만 보이는거고 굳이 데이터에 저장할 필요가 없다. 
            });

            td.addEventListener('click',function(e){

                if( 중단플래그 ) {
                    return;
                }

                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);

                if( dataset[줄][칸] === 코드표.연칸){ // 이미 open 한 칸이다. 
                    return;
                }

                // 클릭했을 때 
                e.currentTarget.classList.add('opened');
                열은칸 += 1;

                if(dataset[줄][칸] === 코드표.지뢰){ // 지뢰클릭
                    e.currentTarget.textContent = '펑!';
                    document.querySelector('#result').textContent='실패ㅠㅠ';
                    중단플래그 = true;

                }else {// 주변 지뢰 개수 
                
                    var 주변 = [ dataset[줄][칸-1], dataset[줄][칸+1]];

                    if ( dataset[줄-1] ){
                        주변 = 주변.concat([dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]]);
                    } 
                    if( dataset[줄+1]){
                        주변 = 주변.concat([dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]]);
                    }
                    var 주변지뢰개수 = 주변.filter(function(v){
                        return v === 코드표.지뢰;
                    }).length;

                    e.currentTarget.textContent = 주변지뢰개수 || '';
                    dataset[줄][칸] = 코드표.연칸;

                    if ( 주변지뢰개수 === 0 ){
                        console.log('주변을 엽니다.');
                        var 주변칸 = [];
                        if( tbody.children[줄-1]){
                            주변칸 = 주변칸.concat([
                                tbody.children[줄-1].children[칸-1],
                                tbody.children[줄-1].children[칸],
                                tbody.children[줄-1].children[칸+1],
                            ]);
                        }
                        주변칸 = 주변칸.concat([
                            tbody.children[줄].children[칸-1],
                            tbody.children[줄].children[칸+1],
                        ]);

                        if( tbody.children[줄+1]){
                            주변칸 = 주변칸.concat([
                                tbody.children[줄+1].children[칸-1],
                                tbody.children[줄+1].children[칸],
                                tbody.children[줄+1].children[칸+1],
                            ]);
                        }

                        주변칸.filter(function(v){
                            return !!v; // undefined 값인 주변칸을 제거한다. 
                        }).forEach(function(옆칸){
                            var 부모tr = e.currentTarget.parentNode;
                            var 부모tbody = e.currentTarget.parentNode.parentNode;
                            var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children, 옆칸);
                            var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                            if(dataset[옆칸줄][옆칸칸] !== 코드표.연칸 ){
                                옆칸.click();
                            }
                        });

                    }         
                } if( 열은칸 === (hor * ver - mine) ) {
                    중단플래그 = true;
                    document.querySelector('#result').textContent = '승리!!';
                }
            })
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    // 지뢰 심기 
    for (var k = 0 ; k< 셔플.length; k++){ // 예 60
        var 세로 = Math.floor(셔플[k] / ver); // 예 7 -> 6
        var 가로 = 셔플[k] % ver; // 예 0 -> 0
        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 코드표.지뢰;
        
    }
    console.log(dataset);
});

 