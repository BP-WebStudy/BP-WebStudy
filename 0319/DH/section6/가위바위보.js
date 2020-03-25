var 이미지 = '0';
var 가위바위보 = {
    바위:'0',
    가위: '-142px',
    보:'-284px'
}; // 딕셔너리 자료구조 


var 점수표 = {
    가위: 1,
    바위: 0,
    보: -1,
};
function com(이미지){
    return Object.entries(가위바위보).find(function(v){
        return v[1] === 이미지;
    })[0];
}
// object.entries() : 딕셔너리 가위바위보 를 2차원 배열로 바꿔준다. 

var 인터벌;

function 인터벌메이커(){
        인터벌 = setInterval(function(){
        if(이미지 === 가위바위보.바위){
            이미지 = 가위바위보.바위;
        }else if(이미지 === 가위바위보.가위){
            이미지 = 가위바위보.보;
        }else {
            이미지 = 가위바위보.바위 ;
        }

        document.querySelector('#computer').style.background = 
        'url(가위바위보.jpg)'+이미지+' 0';
    }, 100);
}
    인터벌메이커();
    document.querySelectorAll('.btn').forEach(function(btn){
        btn.addEventListener('click',function(){
            clearInterval(인터벌);
           
           인터벌메이커();
            
            var mypick = this.textContent;
            var 계산변수 =  점수표[mypick] - 점수표[com(이미지)];
            console.log(mypick, com(이미지));

            if( 계산변수 === 0){
                console.log('비겼습니다.');
            }else if( [-1,2].includes(계산변수)){  
                console.log('이겼습니다.');
                // 배열.includes 로 OR 관계를 줄인다. 
                // 배열안에 includes의 매개변수값이 들어있으면 조건식을 만족한다. 
            }else{
                console.log('졌습니다ㅠㅠ');
            }

           

            // if( mypick === '가위'){
            //     if(com(이미지)==='가위'){
            //         console.log('비김');
            //     }else if(com(이미지)==='바위'){
            //         console.log('졌음');
            //     }else { console.log('이김!');}
            // }
            // else if( mypick === '바위'){
            //     if(com(이미지)==='가위'){
            //         console.log('이김!');
            //     }else if(com(이미지)==='바위'){
            //         console.log('비김');
            //     }else { console.log('졌음');}
            // }
            // else if( mypick === '보'){
            //     if(com(이미지)==='가위'){
            //         console.log('졌음');
            //     }else if(com(이미지)==='바위'){
            //         console.log('이김!');
            //     }else { console.log('졌음');}
            //}
        });
    });