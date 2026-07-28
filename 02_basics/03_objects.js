// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Kushal",
    "full name": "Kushal Shetty",
    [mySym]: "mykey1",
    age:21,
    location: "Bengaluru",
    email: "kushal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "kushal@yahoo.in"
// Object.freeze(jsUser)
jsUser.email = "kushal@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

jsUser.greeting()
jsUser.greetingTwo()