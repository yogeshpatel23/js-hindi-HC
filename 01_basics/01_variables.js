const accountId = 144553
let accountEmail = "yogesh@gamil.com"
var accountPasswrod = "12345"
accountCity = "Jagdalpur"

// accountId = 2 // TypeError: Assignement to constant variable.
accountEmail = "manju@gmail.com"
accountPasswrod = "235645"
accountCity = "Belari"
let accountState

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPasswrod, accountCity, accountState])

