'use strict';

/*Условие задачи:

На сайте UniPage есть подборка интересных языковых курсов. У каждого курса есть цена, которая является диапазоном.
Например:

от 100 до 200 рублей;
от 500 рублей;
до 400 рублей.
Пользователю сайта нужно найти подходящие ему курсы. Для этого есть фильтр, где пользователь может задать подходящий ему диапазон цен.

Требование:

Опишите, как можно отфильтровать список курсов, чтобы выдались только подходящие по цене? Реализуйте на JavaScript (или TypeScript) функцию, проводящую такую фильтрацию.*/

/* 1.Мы можем сделать input атрибу, для того, что бы пользователь мог вводить запрос или ставить диапазон фильтра по цене, а списко будет заполняться в ависимости от запроса.*/


let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function requiredRange1(prices) {
let arr = new Array(prices);
for (let i = 0; i < prices; i++) {
  arr[i] = prices;
}
    return arr;
}

document.writeln(requiredRange1 (null, 200) + '<br>');

document.writeln(requiredRange2 (100, 350) + '<br>');

document.writeln(requiredRange3 (200, nul));

//Общая сортировка цен от 100 до 350
function isPrices(prices) {
  for (i = 0; i < prices.length; i++){
    if (prices[i] > 100 && prices[i] < 350)
    console.log(prices[i]);
}
}

