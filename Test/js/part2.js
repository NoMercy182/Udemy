"use strict";

// Основы ООП ---------------------------------------------------------------------

const soldier = {
  health : 400,
  armor : 100,
  sayHi : function() {
    console.log('Hello Boooy');
  },
};

const John = Object.create(soldier); // Создаём связь 

console.log(John.health);
console.log(typeof(John));
John.sayHi();
