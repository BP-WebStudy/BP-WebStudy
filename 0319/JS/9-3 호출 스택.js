// <9-3. 호출 스택(call stack)
// Last In First Out 즉 LIFO(후입선출) 구조 : 먼저 들어간 게 제일 나중에 나옴 제일 나중에 들어간 게 제일 먼저 나옴
//함수가 끝나면 빠져나간다. }를 기준으로 생각하기

function d() {
    console.log('d');
}

function e() {
    console.log('e');
}

function a() {
    function b() {
        function c() {
            console.log('c');
        }
        c();
        console.log('b');
    }
    b();
    console.log('a');
}

d();
e();
a();

// d e c b a







// <9-5. 재귀, 비동기와 호출 스택>
// (재귀)
function a() {
  a();
}

a();
//는 Maximum call stack exceeded에러!


//
function a() {
    setTimeout(function() {
      a();
    }, 0);
}

a();
//비동기로 호출 스택을 비워준다.
//나머지 부분은 백그라운드와 이벤트루프를 알아야한다.
