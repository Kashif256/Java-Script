//*************************************************************** Functions      **************** //
// Function is a block of code designed to perform a specific task.

// exampele   
// function name(){
// syntax
// }

function SayMyName() {
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("F");
}

//SayMyName () // this is reference of a function

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
//addTwoNumbers() // withuot declaring value if we print it means it shows an Nan which means not a number
//addTwoNumbers(3,6) // o/p -> 9
//addTwoNumbers(3,'9') // it will take 9 as an string and consider 3 as also string  o/p -> 39
//addTwoNumbers(3,"a") // o/p -> 3a
//addTwoNumbers(3, null) // o/p -> 3

function addTwoNumbers(number1, number2){
    //let result = nnumber1 + number 2
    //return result  // the both method is also same  //  o/p -> 8
    return number1 + number2 // o/p -> 8
}
//const result = addTwoNumbers(3,5)
//console.log("Result :", result);


function loginUserMessage (username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("kashif"))   //  o/p -> kashif just logged in
//console.log(loginUserMessage()) // o/p -> undfined just logged in




function loginUserMessage (username = 'sam'){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("kashif"))   //  o/p -> kashif just logged in
// console.log(loginUserMessage()) 