'use strict';

/*
 *
 * TASK 2
 *
 * Напишите функцию которая будет вызываться трижды и складывать все передаваемые ей числа
 *
 */





function add(arg1) {
    function add2(arg2) {
        function add3(arg3) {
            return arg1 + arg2 + arg3;
        }
        return add3;
    }
    return add2;
}


console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

// /*
//  *
//  * TASK 3
//  *
//  * Напишите функцию которая возвращает объект и одно из свойств объекта это функция
//  * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
//  * число на 1 больше чем предыдущее
//  * так же у функции должен быть метод обнуления счетчика
//  * Узнать счетчик напрямую в объетке, нельзя
//  *
//  * */

function solution3() {
    let counter = 0;
    return {

        method: function () {
            console.log(counter++);
        },
        clear: function(){
            
        }
    }
}

let call = solution3();
call.method(); //0
call.method(); //1
call.method(); //2
call.method()
call.clear()
