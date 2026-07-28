const { use } = require("react")

// const tinderUser = new Object() // Singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Tony"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "tony@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kushal",
            lastname: "A N"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}
const obj4 ={5: "a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    }
]

// users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))