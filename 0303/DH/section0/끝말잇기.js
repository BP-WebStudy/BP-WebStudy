console.log('끝말잇기 게임 시작!');
var word = '과일';
while (true){
    var newword = prompt(word);
    if(word[word.length-1 ] === newword[0] ){
        word = newword; 
        alert('딩동댕~')
    } else {
        alert('끝말잇기에요!! ')
    }
}