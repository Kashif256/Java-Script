//  {} if its coming in function or any if else then it is know as scope
var c=500
if (true){
    let a = 10
    const b = 50
    var c = 50
}
//console.log(a); // a is not defined true
//console.log(b); // b is not defined true
//console.log(c); // 50 false because c is not defined but in out it is declared as 500 but still it  gives same output 

let a=500
if (true){
    let a = 10
    const b = 50
    //console.log("inner value :" ,a) // inner value : 10
}
// console.log("outer value :", a); // 500

function one(){
    const username = 'kashif'

    function two(){
        const website='kashif.com'
        //console.log(username); // o/p -> kashif
        //console.log(website) ; // o/p -> kashif.com
    }
    two()
}
one()

if (true){
    const username = "kashif"
    if (username === 'kashif'){
        const website = " kash"
        //console.log(username + website); //o/p -> kashif kash
    }
}




/****************************************************       INTRESTING              */

function addone(num){
    return num+2
}
console.log(addone(5))  // this is function

const addthree = function(num1){  // this is also a function but sometimes called as expression
    return num1+3
}
console.log(addthree(6))
