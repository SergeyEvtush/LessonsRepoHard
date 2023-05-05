"use strict";

const num = 266219;
const resReduse = 1;
const res = num.toString().split('').reduce((acc, current) => acc * current, resReduse);
console.log(`произведение  цифр  числа 266219: ${res}`);
const resPow = res ** 3;
console.log(`результат возведения в 3 степень: ${resPow}`);
console.log(`первые две цифры от результата возведения в степень: ${resPow.toString().slice(0,2)}`);


