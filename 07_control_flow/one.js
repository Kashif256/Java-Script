// if

//const userPassword = true
//if( 2 === 2){// here === is used to check the strict condition
    //console.log("executed");
//}  

// if else 

//const marks = 60
//if(marks >= 50){
   // console.log("you scored good marks");
//}
//else{
   // console.log("you did not score a good mark");
//}


// if elseif else

// const marks = 70
//if(marks === 100){
  //  console.log("You are excellent");
//}
// else if(marks == 90){
   // console.log("you are good");
//}
// else{
   // console.log("Try to improve your sellf");
//}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard &&  2 == 3){  // && it is used to check the two condition also
    console.log("allow to executes");
}
if(loggedInFromGoogle || loggedInFromEmail){ // or (||) is used to check anyone either this or that
    console.log("User logged in");
}
