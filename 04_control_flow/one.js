// if
const isUserLoggedIn = true;
const temperature = 25;

// if (temperature < 50) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User Power: ${power}`)

// const balance = 1000

// if (balance > 500) console.log("Test"), console.log("Test2");

// if (balance < 500) {
//     console.log("less than 500")
// } else if(balance < 750) {
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

const user = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (user && debitCard && 2==3) {
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}