// /*
//  1. Составить предложение из вышестоящих переменных:
//  "Сколько нужно программистов чтобы сделать проект ? 25, 1, команда"
//  */

			//Способ №1

let numbers = [25, 1];
let project = "проект ?";
let team = `команда`;
let howMuch = "Сколько";
let sentence = 'нужно программистов чтобы сделать';

let method1 = `${howMuch} ${sentence} ${project} ${numbers} ${team}`;

console.log(method1);

			//Способ №2

let numbers1 = [25, 1];
let project1 = "проект ? ";
let team1= ` команда`;
let howMuch1 = "Сколько ";
let sentence1 = 'нужно программистов чтобы сделать ';

let method2 = howMuch1 + sentence1 + project1 + numbers1 + team1;

console.log(method2);

//  2. Составьте предложение из представленного массива и выведите предложение
//  в консоль;
//  "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. Он не был больше ни телом, к которому рано или поздно ..."
 let array = ['Он не был больше ни телом, к которому рано или поздно',
   'он обнаружил,', 'Так, когда Будда достиг Просветления,',
  '...', 'что больше не ощущает себя мишенью.'];

 console.log(array[2], array[1], array[4], array[0], array[3]);

// /*
//  3. Добавьте свойста 4 новых свойства в объект используя квадратные скобки и точку.
//  */

let myObj = {};

myObj.str = 'Banan';
myObj.func = function () {};
myObj['number'] = 45158;
myObj['obj'] = {};

console.log(myObj);

// /*
//  4. Используя метод .slice, добавте в недостающие символы в строку
//  */

//Наверное не правильно, но по другому не знаю как.

let sliceString = 'Ytube'; 
let sliceString1 = 'ouTube';

console.log( sliceString.slice(0, 1) + sliceString1  );

/*
 5. Преобразуйте строку x, в максимально удобно читаемый вид
 */
// let frameworks = [2.3, 'Angular', 'Angular2', 'React/Redux'];
// let x = "google \
// released " + 'new version\
// ' + frameworks[1] + Math.floor(frameworks[0]) + "\
// But real speed is" + `${frameworks[frameworks.length - 1]}`;

let frameworks = [2.3, 'Angular', 'Angular2', 'React/Redux'];
let x = `google released new version ${frameworks[2]} But real speed is ${frameworks[3]}`;

console.log(x)
