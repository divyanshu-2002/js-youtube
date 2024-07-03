const accountId = 144554
let accountEmail = "dk@gmial.com"
var accountPassword = "344998"
accountCity = "Sagar"

let accountState;

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); 

/*
 prefer not to use var
 because of issue in  block scope and functional scope 
 Use only const and let
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

