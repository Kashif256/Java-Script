const user ={
    username:'kashif',
    price : 999,

    welcomeMessage : function(){
        //console.log(`${this.username},welcome to the website`); // in this `this.` is used to define the current context example given in `sanu` name when it is called second time
       // console.log(this);
    }
}
user.welcomeMessage() // o/p -> kashif welcome to the website
// user.username= "sanu"
// user.welcomeMessage() // o/p -> sanu welcome to the website

// user.welcomeMessage()

//function chai(){
  //  let username ="kashif"
   //console.log(this.username);   // undefined inside functiion cannot use this operator
//}
//chai()

//const chai = function () {
  //  let username ="kashif"
  //  console.log(this.username);   // o/p -> undefined
//}
//chai()



 /**             To change to arrow function remove the function name and use () => that's it an arrow function declared */



const chai =  () => {
    let username ="kashif"
    //console.log(this.username);   // o/p -> undefined or without username if i use only `this` then also the o/p -> {}
}
//chai()


/**           Syntax of arrow function:
 *                            const name= () => { .....}
 */

/**                                   BASIC ARROW FUNCTION                   */

// const addTwo =(num1 , num2) =>{
  //  return num1+num2
//}
// console.log (addTwo(10,5)); // o/p -> 15

/******************                   Implicit function
 *     In implicit function we dont use curly braces if we use this function then we dont want to use `return` keyword
 */

//const addTwo =(num1 , num2) => num1+num2

//console.log (addTwo(10,5));  // o/p-> 15

/***************************         Explicit function 
 *          In explicit function we use curly braces inside paranthesis like ({name})
 */

//const addTwo =(num1,num2) => ({ username : "kashif"})
//console.log(addTwo(3,4));

