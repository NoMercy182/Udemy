"use strict";

// Типы данных -------------------------------------------------------------

// console.log(4/0); // получаем infinity
// console.log('string' * 9); // получаем NaN

// let und;
// console.log(und); // получаем undefind

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj['name']);

// for (let key in obj) {
//   console.log(key);
// }

// let arr = ['plum.png', 'orange.jpg', 'apple.png', 6, {}, []];
// console.log(arr[1]); // достаем второй элемент массива


// Тернарный оператор -----------------------------------------------------

// let num = 50;

// let result = (num === 50) ? true : false;
// console.log(result);

// result = (num === 50);
// console.log(result);


// Switch -------------------------------------------------------------

// let num = 50;

// switch (num) {
//   case 49:
//     console.log("false");
//     break;
//   case 100:
//     console.log('false');
//     break;
//   case 50:
//     console.log('true');
//     break;
//   default:
//     console.log('Not yet');
//     break;      
// }

// Циклы -------------------------------------------------------------

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 8; i += 1) {
//   console.log(i);
// }

// Functions -------------------------------------------------------------

function doCalc(a, b) {                   // function decloration
  return (a + b);
}

const resultDoCalc = doCalc(20, 30); // результат функции поместил в переменную
console.log(resultDoCalc);


const funcExpression = function(text) {   // function expression
  console.log(text);
};
funcExpression('Hello Babe!');

const calc = (a, b) => a - b;             // функция стрелка
console.log(calc(18, 118));

// Методы строк и чисел ---------------------------------------------------

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

// console.dir(Number); можно потестить в браузере

const testStr = 'test';
const testStr2 = 'MERCY';

const newTestStr = testStr.toUpperCase(); // Верхний регистр
console.log(newTestStr);

const newTestStr2 = testStr2.toLowerCase(); // Нижний регистр
console.log(newTestStr2);

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); // Поиск подстроки

let testMessage = 'No Mercy';
console.log(testMessage.slice(3)); // вырезаем часть строки с 3 позиции и до конца
console.log(testMessage.slice(3, 4)); // вырезаем часть строки с 3 позиции и до 4
console.log(testMessage.slice(-5)); // вырезаем часть строки c конца

console.log(testMessage.substring(3)); // тоже самое но не поддерживает отрицательных значений

// Numbers ---------------------------------------------------

let testNum = 12.9;

console.log(Math.round(testNum)); // Округляем число до целого по правилам математики
console.log(Math.floor(testNum)); // Округляем число до целого отбрасывая дробную часть

let testNumInStr = "12.2px";
console.log(parseInt(testNumInStr)); // Выводит целое число из строки 
console.log(parseFloat(testNumInStr)); // Выводит дробь из строки
