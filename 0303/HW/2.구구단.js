var numberList = [1,2,3,4,5,6,7,8,9];
var randomNumber = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
};
var chance = 3;


var firstNumber = randomNumber(numberList)
var secondNumber = randomNumber(numberList)
while (chance !== 0) {
    var answer = prompt(firstNumber +'*'+ secondNumber +'=')
    if (Number(answer) === firstNumber * secondNumber) {
        alert('correct')        
        var firstNumber = randomNumber(numberList)
        var secondNumber = randomNumber(numberList)
    } else {
        alert('wrong')
        chance -= 1;
    }
}
alert('game over')
