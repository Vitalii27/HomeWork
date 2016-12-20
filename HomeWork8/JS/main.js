function solution1() {
    let str = '';
    return function (a) {
        return str += a + ' ';
    }
}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); //Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('ПРивет')); // Замыкания Использовать нужно ПРивет


function makeCallback(fn) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function () {
            console.log(i);
            if (i == 10) {
                return fn();
            }
        }, i * 1000)
    }

}

makeCallback(function () {
    console.log('THE LAST LAST comment')
});