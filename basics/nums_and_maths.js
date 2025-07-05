//NUMBERS
const score = 400
//console.log(score);
const newScore = new Number(100);
//console.log(newScore); 
//console.log(newScore.toString().length);
//console.log(newScore.toFixed(2)); // 100.00


const otherNumber = 101.588956789;
//console.log(otherNumber.toPrecision(7)); // 101.6

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-In')); // 1,000,000

//Maths

console.log(Math);
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(2, 1, -4, 6, 3)); // -4
console.log(Math.max(2, 1, -4, 6, 3)); // -4 
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
