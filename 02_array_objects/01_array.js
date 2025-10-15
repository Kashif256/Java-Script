// array

const myArray = [1, 2, 3]; // array should be in square brackets
const myHeros =["kashif", "ali", "ahmad"]
const myArr2 = new Array(4,5,6); // another way to create array
console.log(myArray);
console.log(myArray [0]); // o/p -> 1

// Array Methods

myArray.push(4); // add element at last
myArray.push(6);
console.log(myArray); // o/p -> [ 1, 2, 3 , 4, 6 ]
myArray.pop(); // remove last element
myArray.pop(4); // remove last element
console.log(myArray); // o/p -> [ 1, 2, 3]
myArray.unshift(0); // add element at start
myArray.shift(); // remove element at start

const newArray= myArray.join(); // convert array into string
console.log(myArray); // o/p -> [ 0, 1, 2, 3]
console.log(newArray); // o/p -> 0,1,2,3



// slice, splice

console.log("A", myArray); // o/p -> A [ 1, 2, 3 ]
const myn1 = myArray.slice(0,2); // it will not change the original array
console.log(myn1);
const myn2 = myArray.splice(0,2); 
console.log("B", myArray); // o/p -> B [ 1, 2, 3 ]
console.log(myn2)
