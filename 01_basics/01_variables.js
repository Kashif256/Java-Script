const accountID = 14450
let accountEmail = "kashif@gmail.com"
var accountPassword = "123450"
accountCity = "Karachi"

// accountID = 0 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "12342255556"
accountCity = "Lahore"

console.log(accountID)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

/*
preferr not to use var because of issues in block scope and function scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity])