const accountId = 456123
let accountName = "Ankit"
let accountEmail = "ankit@google.com"
var accountPassword = 456987
accountCity = "Delhi"


// accountId = 789456 we cannot redeclare const variable
// But we can redeclare the let, var variables
accountName = "Arpit"
accountEmail = "ankit@yahoo.com" 
accountPassword = 123456
accountCity = "Mumbai"

console.log(accountId);
console.table([accountId, accountName, accountEmail, accountPassword, accountCity]);

