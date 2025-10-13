// Conversion Operation
let score = '40abc';

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "40abc" => NaN
// true => 1 , false => 0
// NaN => Not a number


//Boolean 

let isLoggedIn = null; //1

let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
console.log(booleanIsLoggedIn);



// Values and Output
// 1 => true , 0 => false
// "" => false , "kashif" => true
// null => false

//String 

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



// ************************************Operations***********************************

//Basic
let value = 3;
let negValue = -value;
console.log(negValue)

let a=8;
let b=40;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a**b);
console.log(a/b);
console.log(a%b); // remainder


//Strings

let str1 = "kash";
let str2 = "if";
let str3= str1 + str2 ;
console.log(str3);
console.log("str3:", str3);

console.log("1" + 1); // 11
console.log(1 + "1"); // 11
console.log("1" + 1 + 1); // 111 if string is first then all will be string
console.log(1 + 1 + "1"); // 21 if number is first then all will be number until string comes
console.log("1" + (1 + 1)); // 12 

let gameCounter = 100
gameCounter ++; //this is same as gameCounter = gameCounter + 1
++gameCounter; //this gameCOunter++ and ++gameCounter are same
console.log(gameCounter);