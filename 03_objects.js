// singleton 

// object literal


// important topics 
const mySym = Symbol("key1")



const jsUser ={
    name: "Kashif",
    [mySym]: "value1", // o/p -> { name: 'Kashif', [Symbol(key1)]: 'value1' } use square brackets to use symbol as key
    email: "kashif@gmail.com",
    age: 24,
    location: "Pakistan",
    isLoggedIn : "false",
    lastLoginDays : ["Monday", "Friday"]
}

console.log(jsUser.email); // o/p -> kashif@gmail.com   same method to print object values
console.log(jsUser['email']); // o/p -> kashif@gmail.com         in this for email paranthesis should be in quotes or it should produce error
console.log(jsUser[mySym]); // o/p -> value1

jsUser.email = "kashif123@gmail.com";
//Object.freeze(jsUser); // it will not allow to change or add any new property to the object
jsUser.email = "kashif456@gmail.com"; // o/p -> TypeError: Cannot assign to read only property 'email' of object '#<Object>'
console.log(jsUser); // o/p -> { name: 'Kashif', [Symbol(key1)]: 'value1', email:'kashif123@gmail.com', age: 24, location: 'Pakistan', isLoggedIn: 'false', lastLoginDays: [ 'Monday', 'Friday' ] }

///                   Function         //////////////////////

jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`); // if we use jsUser.name it will also work but this keyword is used to refer to the current object   o/p -> Hello JS User, Kashif
}

console.log(jsUser.greeting()); // o/p -> Hello JS User