const score= 400
console.log (score);

const balance = new Number(100.258)
console.log(balance); // 100.258

console.log(balance.toString().length); //7
console.log(balance.toFixed(2)); //100.26

const otherNumber = 23.5874
console.log(otherNumber);
console.log(otherNumber.toPrecision(3)); // o/p -> 23.6

const secondNumber = 123.5874
console.log(secondNumber);
console.log(secondNumber.toPrecision(3)); // o/p -> 124

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN')); // o/p -> 10,00,000




/*********************************Maths******************* */

console.log(Math);
console.log(Math.abs(-4)); // returns the absolute (positive) value of x. o/p is 4
console.log(Math.round(4.6)); // returns the value of x rounded to its nearest integer. o/p is 5
console.log(Math.ceil(4.2)); // returns the value of x rounded up to its nearest integer. o/p is 5
console.log(Math.floor(4.9)); // returns the value of x rounded down to its nearest integer. o/p is 4
console.log(Math.min(-4,3,6,1,-9)); // returns the lowest value. o/p is -9
console.log(Math.max(-4,3,6,9,1,-9)); // returns the highest value. o/p is 9
console.log(Math.random()); // returns a random number between 0 (inclusive), and 1 (exclusive).
console.log((Math.random()*10) + 1); // returns a random number between 0 and 10
console.log(Math.floor(Math.random()*10) + 1); // returns a random integer between 0 and 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a random integer between 10 and 20 (both inclusive)