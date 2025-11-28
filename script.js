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
let accountState; // when we let any variable empty it is considered as undefined in js


/* 
Ignore var variable because 
of scope issue and functional issue
*/

console.log(accountId);
console.table([accountId, accountName, accountEmail, accountPassword, accountCity, accountState]);

