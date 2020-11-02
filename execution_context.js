// Does the code in the GLOBAL EXECUTION context have access to variables inside a FUNCTIONAL EXECUTION context ?

var i = "Global"

// Function Declaration
function f(){
    let x = "Local"
    console.log("Inside the function")
    // Global Variable i can be accessed inside a function
    console.log(i)
}

// Function Call
f()
console.log("Outside the function")
// Local Variable x cannot be accessed outside the function where it has been declared
console.log(x)

// What is the error you get ?

// doesnt give the last x variable because its defined in a function