const name= "kashif"
const age= 20

console.log(name + age + "value"); // this is an old method but for modern method is given below for clarification

console.log(`Hello my name is ${name} and my age is ${age}`); // use backtecks if u want to declare variable use $ symbol and inside {} right value.

const gameName = new String ('Kashif')

console.log(gameName[0]); // o/p -> k
console.log(gameName.__proto__); // o/p ->{}

console.log(gameName.length); // o/p -> 6
console.log(gameName.toLowerCase()); // o/p -> kashif
console.log(gameName.toUpperCase()); // o/p ->KASHIF
console.log(gameName.charAt(3)); // o/p -> h
console.log(gameName.indexOf('h')); // o/p -> 3

const newString = gameName.substring(0,2) //o/p -> ka
console.log(newString);

const oldString = gameName.slice(0,2) // o/p -> ka
console.log(oldString);