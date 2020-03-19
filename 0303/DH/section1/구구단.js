while(true){

    var num1 = Math.ceil(Math.random()*9);
    var num2 = Math.ceil(Math.random()*9);
    var res = num1 * num2;

    var 답 = prompt ( String(num1) + '곱하기' + String(num2)+'는?');
    var 조건 = true;

        while(조건){
            if( res === Number(답)) {
                alert('딩동댕!')
                조건 = false;
            } else {
                alert('땡');
            }
        }
} 