// Primitive

const score = 100
const scoreValue = 100.33

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)

//const bigNumber = 23244555525246488n


//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]  // array

let myObj = {             //objects
    name: "divyanshu",
    age: 24,
}

const myFunction = function(){   // function
    console.log("Hello,World");
}


//console.log(typeof scoreValue)

/**************** Memory_In_JavaScript********************** */

let myYoutubeName = "Divyanshu";
let anotherName = myYoutubeName;

//console.log(anotherName);

anotherName = "chaiaurcode"

//console.log(myYoutubeName)
//console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "divyanshu@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

