var num = 0
for (var star = 9; star >= 1; star -= 2) {
    console.log(' '.repeat(num) + '*'.repeat(star))
    num += 1
}

for (var star = 9; star >= 1; star -=2) {
    console.log(' '.repeat((9-star)/2) + '*'.repeat(star))
}