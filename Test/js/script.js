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

// Callback functions ---------------------------------------------------

function first() {
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

function done() {
  console.log('I Finished this lesson!');
}

learnJS('JavaScript', done); // передаем функцию как аргумент без скобок!

// Объекты, деструктуризация объектов ---------------------------------------------

// Методы объектов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

const testOptions = {
  name : 'test',
  width : 1024,
  height : 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest : function() {       // создание своего метода
    console.log('Test');
  }
};

const {border, bg} = testOptions.colors; // деструктризация объекта

testOptions.makeTest();

// delete testOptions.name; // удаляем ключ name

for (let key in testOptions) {
  if (typeof(testOptions[key]) === 'object') {
    for (let i in testOptions[key]) {
      console.log(`Свойство ${i} имеет значение ${testOptions[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${testOptions[key]}`);
  }
}

// Массивы и псевдомассивы ---------------------------------------------

const testArray = [1, 2, 3, 6, 8];

testArray.pop(); // удаляет элемент в конце массива
testArray.push(10); // добавляет элемент в конец массива

for (let i = 0; i < testArray.length; i += 1) {
  console.log(testArray[i]);
}

for (let value of testArray) {
  console.log(value);
}

const testArray2 = [1, 2, 3, 6, 8, 10];

testArray2.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} in array ${arr}`);
});

// testArr.shift();           // удаляет первый элемент
// testArr.unshift();         // добавляет элемент в начало массива
// testArr.split(',');        // превращает строку в массив
// testArr.join(' ');         // превращает массив в строку
// delete testArr[1];         // удаляет второй элемент
// testArr.splice(0, 5, 4);   // удалить 5 элементов с индекса ноль и добавить число 4
// testArr.slice(0, 5);       // копирует часть массива с индекса 0 до 5 не включая
// testArr.sort();            // сорт массива, если не передать fn - сорт элементы как строки
// testArr.reverse();         // меняет порядок элементов на обратный
// testArr.concat(3);         // создает нью массив в который все копирует и добав нью элемент

let testArr = [14, 32, 65, 97, 0, 23, 44, 82];

let sortTestArr = testArr.sort(compareNum); // отсортировали и засунули в нью массив

function compareNum(a, b) {   // функция сортировки чисел
  return a - b;
}

console.log(testArr);
console.log(sortTestArr);


// Передача по ссылке или по значению, Spread оператор (ES6-ES9) -----------------------

const spObj = {
  a: 5,
  b: 1,
};

const copySpObj = spObj; // ссылка

copySpObj.a = 10;

console.log(spObj);
console.log(copySpObj);

const newObj1 = {
  a : 5,
  b : 10,
  str : 'hello',
  colors : {
    dark : 'black',
    light: 'white',
  }
};

function objCopy(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    if (typeof(key) === 'object') {
      for (let i in mainObj[key]) {
        objCopy[key][i] = mainObj[key][i];
      }
    }
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const newObj2 = objCopy(newObj1);
newObj2.colors.dark = 'blue';

console.log(newObj1);             // не поменялся первый объект
console.log(newObj2);             // копия через цикл

const add = {
  d : 17,
  e : 20
};

// console.log(Object.assign(newObj2, add)); // копия повехностных значений объекта, глуб не меняется

const cloneObj = Object.assign({}, add);  // новый объект + копия
cloneObj.d = 33;

console.log(add);
console.log(cloneObj);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // копирует массив

const video = ['youtube', 'vimeo', 'rutube', [1, 2]];
const blogs = ['wordpress', 'livejornal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

internet.shift();

console.log(video);
console.log(internet);

function log(aa, b, c) {
  console.log(aa);
  console.log(b);
  console.log(c);
}

const numForLog = [2, 5, 7];

log(...numForLog);

const ObjectSP = {
  one: 1,
  two: 2,
};

const newObjectSP = {...ObjectSP};
