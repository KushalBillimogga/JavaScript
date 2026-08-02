function sayMyName(){
    console.log("K")
    console.log("U")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("L")
}

// sayMyName()

// function addTwoNumbers(a,b){
//     console.log(a+b)
// }

// const result = addTwoNumbers(3,4)

// console.log("Result:",result)

function addTwoNumbers(a,b){
    // let result = a + b
    // return result
    return a + b
}
const result = addTwoNumbers(3,4)

// console.log("Result:",result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Kushal"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Kushal",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Ravana",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))