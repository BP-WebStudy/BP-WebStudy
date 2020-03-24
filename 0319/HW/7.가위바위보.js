function pick_pic(picked) {
    document.querySelector('.image').style.width = '150px';
    document.querySelector('.image').style.height = '200px';
    document.querySelector('.image').src = picked;
}
var dic = {
    바위: 'rock.jpg',
    가위: 'scissor.jpg',
    보: 'paper.jpg'
};
// var dic2 = {
//     'rock.jpg': '바위',
//     'scissor.jpg': '가위',
//     'paper.jpg': '보'
// }  // 딕셔너리는 키에 해당하는 밸류값을 찾기엔 수월하지만 그 반대상황(밸류->키 찾기)은 수행하기 까다롭다.
console.log(Object.entries(dic))
//Object.entrie(div) = {
// 0: ['바위', 'rock.jpg']
// 1: ['가위', 'scissor.jpg']
// 2: ['보', 'paper.jpg']
//}
var 찾기 = Object.entries(dic).find(function(v) { // find는 해당 엔트리를 순회한다.
    return v[0] === '바위'
})
function 컴퓨터의선택(picked) {
    return Object.entries(dic).find(function(v) {
        return v[1] === picked
    })[0]
}

// 1차원배열에선 indexOf 2차원배열에선 find, findIndex가 주로 쓰임.

var computer_choice;
var 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(() => { // 컴퓨터가 랜덤으로 뽑기위해 생성
        var pic = ['paper.jpg', 'rock.jpg', 'scissor.jpg'];
        var picked = pic[Math.floor(Math.random() * pic.length)] // 'paper.jpg', 'rock.jpg', 'scissor.jpg' 중에 하나
        computer_choice = 컴퓨터의선택(picked);
        pick_pic(picked);
    }, 100);
}

인터벌메이커();

var 점수표 = {
    가위: 1,
    바위: 0,
    보: -1
}

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(인터벌);
        setTimeout(() => {
            인터벌메이커();
        },2500)
        var 나의선택 = this.textContent;    
        var 나의점수 = 점수표[나의선택];
        var 컴퓨터점수 = 점수표[computer_choice];
        var 점수차 = 나의점수 - 컴퓨터점수;
        console.log(나의선택, computer_choice)  
        if (점수차 === 0) {
            console.log('비겼습니다!')
        } else if ([-1,2].includes(점수차)) {
            console.log('이겼습니다!')
        } else {
            console.log('졌습니다!')
        }

        // if (나의선택 === '가위') {
        //     if (computer_choice === '가위') {
        //         console.log('비겼습니다')
        //     } else if (computer_choice === '바위') {
        //         console.log('졌습니다')
        //     } else {
        //         console.log('이겼습니다')
        //     }
        // } else if (나의선택 === '바위') {
        //     if (computer_choice === '가위') {
        //         console.log('이겼습니다')
        //     } else if (computer_choice === '바위') {
        //         console.log('비겼습니다')
        //     } else {
        //         console.log('졌습니다')
        //     }
        // } else if (나의선택 === '보') {
        //     if (computer_choice === '가위') {
        //         console.log('졌습니다')
        //     } else if (computer_choice === '바위') {
        //         console.log('이겼습니다')
        //     } else {
        //         console.log('비겼습니다')
        //     }
        // }
    })
});
