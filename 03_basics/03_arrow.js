const user = {
    username: "Kushal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Ravana"
// user.welcomeMessage()

// console.log(this)

// function coffee(){
//     let username = "Kushal"
//     console.log(this.username)
// }

// coffee()

// const coffee = function coffee(){
//     let username = "Kushal"
//     console.log(this.username)
// }

// coffee()

const coffee = ()=>{
    let username = "Kushal"
    console.log(this)
}

// coffee()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2)=> num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username:"Kushal"})

// console.log(addTwo(3, 4))

const myArray = [2, 3, 4, 5, 6]

myArray.forEach()