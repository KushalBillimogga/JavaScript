const name = "Kushal"
const repCount = 10

// console.log(name + repCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repCount}`)

const gameName = new String("Kushal-Shetty")

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf("s"))

// const newString = gameName.substring(0,6)
// console.log(newString)

const anotherString = gameName.slice(-13,6)
console.log(anotherString)

const newStringOne = "       Kushal         "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://kushal.com/kushal%20shetty"

console.log(url.replace('%20','-'))
console.log(url.includes("kushal"))

console.log(gameName.split("-"))