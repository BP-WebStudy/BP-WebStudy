// a.toggle(b ): 스위치와 같은 역할, a에 b라는 클래스가 없으면 a에 add해주고,
//                  있으면 remove 해준다.   

// 참조와 복사 
var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔후보 = 색깔들.slice();
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = [];
var 시작시간 ;

function(셔플){
    for(var i=0; 색깔들.length > 0; i++){
        색깔 = 색깔.concat(색깔들.splice(Math.floor(Math.random()*색깔들.length),1));
    }
}


function 카드세팅(가로, 세로) {
    클릭플래그 = false;
    for (var i = 0; i < 가로 * 세로; i += 1) {
      
      var card = document.createElement('div');
      card.className = 'card';
      var cardInner = document.createElement('div');
      cardInner.className = 'card-inner';
      var cardFront = document.createElement('div');
      cardFront.className = 'card-front';
      var cardBack = document.createElement('div');
      cardBack.className = 'card-back';
      cardBack.style.backgroundColor = 색깔[i];
      
      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      card.appendChild(cardInner);

      (function (c){
          card.addEventListener('click', function(){
              if(클릭플래그 && !완성카드.includes(c)){
                c.classList.toggle('flipped');
                클릭카드.push(c);
                
                if(클릭카드.length === 2){
                    if(클릭카드[0].querySelector('.card-back').style.backgroundColor ===
                    클릭카드[1].querySelector('.card-back').style.backgroundColor)
                    {
                        완성카드.push(클릭카드[0]);
                        완성카드.push(클릭카드[1]);
                        클릭카드 = []; 
                        
                        if(완성카드.length === 12 ){
                            var 끝시간 = new Date();
                            alert('축하드립니다! 성공! '+ (끝시간 - 시작시간) / 1000 + 'sec');
                            document.querySelector('#wrapper').innerHTML = ''; // 카드세팅 모두 초기화 
                            색깔후보 = 색깔들.slice();
                            색깔 = [];
                            완성카드 = [];
                            시작시간;
                            셔플();
                            카드세팅(가로,세로);
                        }
                    } else {
                        클릭플래그 = false;
                        setTimeout(function(){
                            클릭카드[0].classList.remove('flipped');
                            클릭카드[1].classList.remove('flipped');
                            클릭플래그 = true;
                            클릭카드 = [];
                        }, 1000);
                    }  
                }
            }
        });
      })(card); // card 의 classlist에 flipped 가 없으면 add 처리 해준다. 
                // class 'flipped'는 카드를 회전시키는 역할을 한다. 
      document.querySelector('#wrapper').appendChild(card);
    }

    document.querySelectorAll('.card').forEach(function(card,index){
        setTimeout(function(){
            card.classList.add('flipped');
        }, 1000+100*index );
    }); // 사용자에게 카드 색 공개 
    
    setTimeout(function(){
        document.querySelectorAll('.card').forEach(function(card,index){
                card.classList.remove('flipped');
            });
            클릭플래그= true;
            시작시간 = new Date();
        },5000);
    } // 5초 뒤에 다시 비공개

    셔플();
카드세팅(가로,세로);