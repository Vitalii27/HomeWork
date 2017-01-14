

/* TASK 1
//Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес.
//Используя прототипное наследование создать дочерние классы Worker (дописать в них поля места работы, зарплатой, метод "работать")
//и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
//Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human*/


function Human(name, age, pol, height, weight) {
  this.name = name,
    this.age = age,
    this.pol = pol,
    this.height = height,
    this.weight = weight
}

function Worker(placeOfWork, salary, name, age, pol, height, weight) {
  Human.call(this, name, age, pol, height, weight);
  this.placeOfWork = placeOfWork,
    this.salary = salary
}
function Student(placeOfStudy, scholarship, name, age, pol, height, weight) {
  Human.call(this, name, age, pol, height, weight);
  this.placeOfStudy = placeOfStudy,
    this.scholarship = scholarship
}
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.work = function () {
  console.log('Я работаю');
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.watchSerials = function () {
  console.log('Смотрю сериалы');
}

let std = new Student('EasyCode', 0, 'Vitalii', 22, 'male', 1.80, 80);
std.watchSerials();
console.log(std);
let wrk = new Worker('Mail.ru', 50000, 'Vitalii', 22, 'male', 1.80, 80);
console.log(wrk);
wrk.work();
// @SUPER

/*
* TASK 0
* Создайте функцию обертку над другой функцией
* Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
* которую мы обернули
*
* */


function wrapper(a, b) {
  this.myFunc = function () {
    console.log(a, b);
  }
}
wrapper(1, 2);
myFunc();