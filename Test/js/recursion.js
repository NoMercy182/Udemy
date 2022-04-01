"use strict";

// Recursion Tasks ------------------------------------------------------------

const obj = {
  a : 1,
  b : 4,
  c : {
    ss : 'ssss',
    dd : 'dddd',
    newOBJ : {
      black : 'чёрный',
      white : 'белый',
    }
  }
};


console.log(Object.values(obj)); // це значения


const deepCopy = (object) => {
  let newObject = {};
  if (typeof(object) === 'object') {
    for(let key in object) {
      newObject[key] = deepCopy(object[key]);
    }
    return newObject;
  }
  console.log(object);
  return object;
};

const objCopy = deepCopy(obj);

console.log(objCopy);

// Factorial ------------------------------------------------------------

const fuc = (n) => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return;
  }
  if (n === 1) {
    return n;
  }
  return n * fuc(n - 1);
};

console.log(fuc(5));

// возведение в степень ------------------------------------------------------------

const pow = (x, n) => {
  if (n === 1) {
    return x;
  }
  return x * pow(x, n - 1);
};

let result = pow(2, 3);
console.log(result);



