// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 3456345634536453645364n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iron Man", "Thor", "Hulk"];
let myObj = {
  name: "Kushal",
  age: 21,
};

const myFunction = function () {
  // console.log("Hello World");
};

// console.log(typeof myFunction);

// ----------------------------------------------------------------------

// Stack (Primitive), Heap (Non-primitive)

let myName = "Kushal";
let anothername = myName;
anothername = "Ravana";

console.log(myName);
console.log(anothername);

let userOne = {
  email: "kushal@gmail.com",
  upi: "kushal@ybl",
};

let userTwo = userOne;
userTwo.email = "ravana@lanka.com";

console.log(userOne.email);
console.log(userTwo.email);
