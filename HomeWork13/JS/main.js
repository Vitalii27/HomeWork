

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */



class Human {
  constuctor(name, age, pol, height, weight) {
    this.name = name,
      this.age = age,
      this.pol = pol,
      this.height = height,
      this.weight = weight
  }
};

class Worker extends Human {
  constructor(placeOfWork, salary, name, age, pol, height, weight) {
    super(...arguments);
    this.placeOfWork = placeOfWork,
      this.salary = salary
  }
  work() {
    console.log('Я работаю');
  }
};
class Student extends Human {
  constructor(placeOfStudy, scholarship, name, age, pol, height, weight) {
    super(...arguments);
    this.placeOfStudy = placeOfStudy,
      this.scholarship = scholarship
  }
  watchSerials() {
    console.log('Смотрю сериалы');
  }
};



let std = new Student('EasyCode', 0, 'Vitalii', 22, 'male', 1.80, 80);
std.watchSerials();
console.log(std);
let wrk = new Worker('Mail.ru', 50000, 'Vitalii', 22, 'male', 1.80, 80);
console.log(wrk);
wrk.work();
/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 10000;
  let serverResponse = (i) => {
    return setTimeout(function () {
      console.log('zzzz');
      console.log(i);
    }, timer / 2);
  };
  for (let i = 10; i >= 1; i--) {
    serverResponse(i);
  }
};
startTimer();