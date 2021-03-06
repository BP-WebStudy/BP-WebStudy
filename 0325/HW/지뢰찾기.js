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
    지뢰: 1,
    보통칸: 0,
};

document.querySelector('#exec').addEventListener('click', function() {
    // 내부 먼저 초기화
    tbody.innerHTML = '';
    dataset = [];
    중단플래그 = false;
    열은칸 = 0;
    document.querySelector('#result').textContent = '';
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    // 지뢰 위치 뽑기
    var candidate = Array(hor * ver).fill().map(function(elem, idx) {
        return idx
    });
    var shuffle = [];
    while (candidate.length > hor * ver - mine) { // splice를 통해 요소를 하나씩 뽑기 때문
        var ele = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        // splice는 결과값이 배열[]로 반환되기 때문에 [0]로 인덱싱해준다.
        shuffle.push(ele);
    };
    console.log(shuffle);

    // 지뢰 테이블 만들기
    for (var i=0; i < ver; i++) {
        var arr = [];
        var tr = document.createElement('tr');
        for (var j=0; j < hor; j++) {
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                if (중단플래그) {
                    return;
                }
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, e.currentTarget.parentNode); //부모tr
                if (dataset[줄][칸] === 코드표.연칸) {
                    return;
                }
                if (['', 'X'].includes(e.currentTarget.textContent)) {
                    e.currentTarget.textContent = '!';
                    e.currentTarget.classList.add('flag');
                    if (dataset[줄][칸] === 코드표.지뢰) {
                        dataset[줄][칸] === 코드표.깃발지뢰;
                    } else {
                        dataset[줄][칸] = 코드표.깃발;
                    }
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                    e.currentTarget.classList.remove('flag');
                    e.currentTarget.classList.add('question');
                    if(dataset[줄][칸] === 코드표.깃발지뢰) {
                        dataset[줄][칸] === 코드표.물음표지뢰;
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
            td.addEventListener('click', function(e) {
                // 클릭했을 때 지뢰 개수
                if (중단플래그) {
                    return;
                }

                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if ([코드표.연칸,코드표.깃발,코드표.깃발지뢰, 코드표.물음표지뢰, 코드표.물음표].includes(dataset[줄][칸])) {
                    return;
                }
                e.currentTarget.classList.add('opened');
                열은칸 += 1;
            
                
                if (dataset[줄][칸] === 코드표.지뢰) { //지뢰에 걸렸을 때
                    e.currentTarget.textContent = '펑';
                    document.querySelector('#result').textContent = '실패';
                    중단플래그 = true;
                } else {
                    var 주변 = [ //선택된 칸 양옆 데이터
                        dataset[줄][칸-1],                      dataset[줄][칸+1]
                    ];
                    if (dataset[줄 - 1]) {
                        주변 = 주변.concat([dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]])
                    }
                    if (dataset[줄 + 1]) {
                        주변 = 주변.concat([dataset[줄+1][칸-1], dataset[줄+1][칸],dataset[줄+1][칸+1]])
                    }
                    var 주변지뢰개수 = 주변.filter(function(v) {
                        return [코드표.지뢰, 코드표.깃발지뢰, 코드표.물음표지뢰].includes(v);
                    }).length
                    // 거짓인 값: false, '', 0, null, undefined, NaN;
                    e.currentTarget.textContent = 주변지뢰개수 || '';
                    dataset[줄][칸] = 코드표.연칸;
                    if (주변지뢰개수 === 0) {
                        // 주변 8칸 모두 오픈
                        var 주변칸 = [];
                        if (tbody.children[줄-1]) {
                            주변칸 = 주변칸.concat([
                                tbody.children[줄-1].children[칸-1],
                                tbody.children[줄-1].children[칸],
                                tbody.children[줄-1].children[칸+1],
                            ])
                        }
                        주변칸 = 주변칸.concat([
                            tbody.children[줄].children[칸-1],
                            tbody.children[줄].children[칸+1],
                        ])
                        if (tbody.children[줄+1]) {
                            주변칸 = 주변칸.concat([
                                tbody.children[줄+1].children[칸-1],
                                tbody.children[줄+1].children[칸],
                                tbody.children[줄+1].children[칸+1],
                            ])
                        }
                        주변칸.filter(function(v) { 
                            return !!v 
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
                if (열은칸 === hor * ver - mine) {
                    중단플래그 = true;
                    document.querySelector('#result').textContent = '승리';
                }
            });
            tr.append(td);
            arr.push(코드표.보통칸);
        }
        dataset.push(arr);
        tbody.append(tr);
    }
    console.log(dataset);

    // 지뢰 심기
    for (var k=0; k < shuffle.length; k++) { // 0 ~ 9 -> 10 ~ 19 
        var 세로 = Math.floor(shuffle[k] / ver); 
        var 가로 = shuffle[k] % ver;
        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 코드표.지뢰; 
    }
});
