'use strict';

// const box = document.getElementById('box');

// const btns = document.getElementsByTagName('button');
// console.log(btns); // получаем html collection
// console.log(btns[0]); // обращаемся к первой кнопке по индексу

// const circles = document.getElementsByClassName('circle');
// console.log(circles); // получаем html collection

// const hearts = document.querySelectorAll('.heart'); // имеет метод forEach
// console.log(hearts);
// hearts.forEach(item => console.log(item));

// const oneHeart = document.querySelector('.heart'); // находит первый элемент
// console.log(oneHeart);

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');


console.dir(box); // чекаем все свойста и методы

for (let i = 0; i < circles.length; i += 1) {  // красим все элементы
  circles[i].style.background = 'black';
}

hearts.forEach(item => item.style.background = 'black'); // красим все через forEach
hearts[0].style.background = 'white';  // красим один элемент псевдомассива

box.style.cssText = 'background-color: blue'; // как обычный css code

for (let value of btns) {
  value.style.borderRadius = '100%';    // forOf 
}

const div = document.createElement('div'); // создаем div в js
div.classList.add('black');                // присваиваем класс

wrapper.append(div);                  // добавляем div в html в конец wrapper
wrapper.prepend(div);                 // добавляем div в начало wrapper

hearts[0].before(div);                   // можно и так) вставляем перед элементом
hearts[0].after(div);                     // вставляем после

circles[0].remove();              // удаляем элемент из html

hearts[0].replaceWith(circles[1]); // заменить один элемент другим 

div.innerHTML = '<h1>Hello World</h1>'; // вставляем теги
div.textContent = 'Hello'; // вставляем текст

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');








