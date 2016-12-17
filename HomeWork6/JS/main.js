
// /*

// *
// * TASK 1
// * Посчитайте количество букв а, в передаваемом параметре
// *
// * */

// let randomString = 'aaa b a w c ';

// let user = {
//   name: 'Albina'
// };

// let javaScript = {
//   html: 'JavaScript'
// };


// function countLetterA(str) {
//   var num = str.indexOf('a');
//   for (var i = 0; num !== -1; i++) {
//     num = str.indexOf('a', num + 1);
//   }

//   return i
// }


// console.log(countLetterA(randomString)); // 4
// console.log(countLetterA(user.name + javaScript.html)); // 3

// /*
// //  *
// //  * TASK 2
// // //  * Вам дано предложение, вам необходимо перевернуть каждое слово
// // //  * в предложении в обратном порядке
// // //  *
// // //  * */
// function reverseEachWord(string) {
//   var arr = []; var returnSentence = arr.map.call(string, function (arr) {
//     return arr;
//   }).reverse().join(''); {
//   } return returnSentence.split(' ').reverse().join(' ');
// }


// console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
// // uoY t'nod evah ot od gnihtyna laiceps ot nigeb gnisu eht .MOD tnereffiD sresworb evah tnereffid snoitatnemelpmi fo eht MOD


// console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));
// // ehT tnemucoD tcejbO ledoM )MOD( si a gnimmargorp ecafretni rof LMTH dna LMX stnemucod


// /* TASK 3
// * Добавьте в функцию reverseEachWord второй параметр,
// * данный параметр булево, если true - тогда слова так же переворачиваются в обратном порядке
// * */


function reverseEachWord(string, bool) {

  var arr = [];
  var returnSentence = arr.map.call(string, function (arr) {
    return arr;
  }).reverse().join(''); {
  }
  if (bool === true) {
    return returnSentence;
  }
  else {
    return returnSentence.split(' ').reverse().join(' ');
  }
}

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM', true));
// //MOD eht fo snoitatnemelpmi tnereffid evah sresworb tnereffiD .MOD eht gnisu nigeb ot laiceps gnihtyna od ot evah t'nod uoY
console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents', true));
// // stnemucod LMX dna LMTH rof ecafretni gnimmargorp a si )MOD( ledoM tcejbO tnemucoD ehT

console.log(reverseEachWord('Hi my Name is', false));
// // iH ym emaN si
// @ SUPER

/*
 *
 * TASK 1
 * Выведите уникальные значения
//  *
//  * */

 function uniqueElements(arr) {
   var array = [];
   for (var i = 0; i < arr.length; i++) {

     if (array.indexOf(arr[i]) == false) {
       array.push(arr[i]);
     }
   }
   return array
 }



 let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];

 console.log(uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
 console.log(uniqueElements([1, 1, 2, 3])); // 1,2,3
