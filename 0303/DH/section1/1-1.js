var 다혜 = {
    이름 : '장다혜',
    먹다 : function 먹다() {
        console.log('냠냠')
    },
}

var 함수 = '먹다'
다혜[함수] // 대괄호만 변수를 넣을 수 있다.
다혜.함수 

Array.isArray(배열) // 배열인지 아닌지 구분할 수 있다.