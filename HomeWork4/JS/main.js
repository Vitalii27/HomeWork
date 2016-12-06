// /*
//  1. Напишите функцию которая принимает 2 числа 
//  и возвращает массив содержащий числа между первым числом и вторым числом;
// */


function numbersBetween(a, b) {
  let arr = [];
  for (let i = a + 1; i < b; i++) {
    arr.push(i);
  }
  return arr;

};
console.log(numbersBetween(1, 5));
console.log(numbersBetween(3, 6));
console.log(numbersBetween(12, 15));




//  2. Перепешите задачу FizzBuzz, но с использованием цикла. 
//      Расчет чисел должен идти до 100

function fizzBuzz100(par1) {
  let a = '';
  while (par1 <= 100) {
    if (par1 % 3 == 0) {
      a = a + 'Fizz';
    }
    if (par1 % 5 == 0) {
      a = a + 'Buzz';
    }
    if (!a.length) {
      return par1;
    }
    return a;
  }
};
console.log(fizzBuzz100(15));


// /*
//  3. Напишите функцию которая принимает 1 аргумент - массив 
// //    И возвращает новый массив содержащий типы значений переменных


let arr = ['privet', 12, {}, [1, 2]];

function returnArr(argument) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {

    newArr.push(typeof (arr[i]));
    console.log(newArr)



  };

};
returnArr();



