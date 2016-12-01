
//ПРОВЕРКА ЛОГИНА
/*
let user = prompt('Кто пришёл?');

if (user == 'Админ' || user == 'админ') {

	let password = prompt('Пароль?');

	if (password == 'Чёрный Властелин' || password == 'Черный Властелин' || password == 'чёрный властелин' || 
		password == 'черный властелин' || password == 'Чёрный властелин' || password == 'Черный властелин') {
		alert('Добро пожаловать!');
   } else if (password == null) { 
   	alert('Вход отменён');
   } else {
   	alert('Пароль неверен');
   }

 } else if (user == null) { 
 	alert('Вход отменён');

 } else {
 	alert('Я вас не знаю');
 }

*/


//1. Напишите функцию которая принимает в качестве аргумента массив
// элемент массива и добавляет элемент в конец массива

/*
let arr = [];

function addToArray(arr, newElem) {
	arr[arr.length ] = newElem;
}

let array = [1, 'wfwef', 56];

addToArray(arr, 35);

addToArray(arr, 32);
addToArray(arr, '123');
addToArray(arr, { functionTypes: ['functionExpression', 'functionDeclaration'] });
addToArray(arr, array);
console.log(arr);
*/


// /*
// 2. Напишите функцию которая получает 3 параметра и возвращает объект типа: 


/*
function simpleObjectGenerator(param1, param2, param3) {

	return {
		argument1: param1,       
		argument2: param2,
		argument3: param3,
	};

}
var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(userNames, 'privet'.toUpperCase(), 65215616));
*/

//3.  Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект.

  // Функция создает объект где ключ это первый аргумент, а значение - второй аргумент
   // и добавляет свойство "name" из объекта и возвращает данный новый объект

/*
   var myName = { name: 'Vatalii' };

   function addNameToUser(par1, par2, par3){
   	var obj = {};
   	obj.name = myName.name;
   	obj[par1] = par2;
   	return obj;
   }

   console.log(addNameToUser('family', 'Khlystun', myName));

*/



// /*
// -> @@ SUPER
//   Напишите функцию, которая будет возвращать 'Fizz' если передаваемый параметр кратен 3,
//    'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
//    Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
// */

	// Наверное не правильно, но работает вроде))
/*
	function fizzBuzz(par1, par2, par3) {
		let num = prompt('dew');
		if( num == null ){
			return num
		}
		if(num % 3 == 0 && num % 5 == 0){
			return par3
		}
		else if( num % 3 == 0 ){
			return par1
		} 
		else if(num % 5 == 0){
			return par2
		}
		else if(num % 3 !== 0 && num % 5 !== 0){
			return num
		}
	}
	console.log(fizzBuzz('Fizz', 'Buzz', 'FizzBuzz'));
*/