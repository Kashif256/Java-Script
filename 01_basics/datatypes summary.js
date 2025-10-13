//  # primitive

//example
//let a = 10;
//let b = a;
//b = 20;
//console.log(a); // 10 ✅ (not changed)

//In JavaScript, there are 7 primitive data types.

//Here’s the list:

//1. Number → represents numeric values (integers, floats).
//Example: 10, 3.14


//2. String → represents text (sequence of characters).
//Example: "Hello", 'World'


//3. Boolean → represents logical values.
//Example: true, false


//4. Undefined → a variable declared but not assigned any value.
//Example:let x;
//console.log(x); // undefined


//5. Null → represents an intentional "empty" value.
//Example: let y = null;


//6. Symbol (ES6) → represents a unique and immutable identifier.
//Example:let sym = Symbol("id");


//7. BigInt (ES2020) → represents large integers beyond the safe limit of Number.
//Example:  let big = 1234567890123456789012345678901234567890n; //if n is in last then it known as bigint




// ******************* NON-primitive (or) Reference Data Types ********************

//Example
//let x = { name: "Kashif" };
//let y = x;
//y.name = "Ali";
//console.log(x.name); // "Ali" 😲 (changed!)

//Types of Reference Types

// 1.Object
//A collection of key–value pairs.
//Example:
//let person = { name: "Kashif", age: 20 };

// 2.Array
//A list-like structure to store multiple values.
//Example:
//let fruits = ["apple", "banana", "mango"];

// 3.Function
//A block of code that can be reused.
//Example:
//function greet() {
//  console.log("Hello!");
//}



//*************************************************************** */

// Memory

// if memory find in Stack Memory -> primitive (numbers, string, boolean, etc..) if it is defined a copy will be get
// if memory find in Heap Memory -> Non-primitive (objects, arrays, functions , etc........ ) if it is defined a original value will be defined
/********************************************************Stack Memory */
let myYoutubename = "kashif";
let anotherName = myYoutubename
anotherName='kk';

console.log(myYoutubename);// o/p -> kashif
console.log(anotherName); // o/p -> kk

/*******************************************************Heap Memory */
let userOne={
    email: "kashif@gmail.com",
    name :"kash"
}

let userTwo = userOne

userTwo.email = "kk@gmial.com"

console.log(userOne.email); // o/p -> kk@gmail.com
console.log(userTwo.email); // o/p -> kk@gmail.com