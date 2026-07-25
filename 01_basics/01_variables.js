const accountId = 12345
let accountEmail = "kushal@gmail.com"
var accountPassword = "123456"
accountCity = "Hassan"
let accountState

// accountId = 2 // cannot update a constant variable



accountEmail = "k@gmail.com"
accountPassword = 98765
accountCity = "Banglore"


/*
Prefer not to use var, because of issue in block and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])