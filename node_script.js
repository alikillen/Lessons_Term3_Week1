console.log("What is your name.")
process.stdin.on('readable', function () {
name = process.stdin.read()
    if (name !== null) {
        console.log(`Hello ${name}`)
        // used to exit from the code
        process.exit()
    }
});

// Notice how the following code continues, while I am waiting for the name to be entered
console.log("Not waiting for the user give their name.")
console.log("Continuing with the code")


// also note how the timeout function allows us to enter name, while waiting for 3 seconds
setTimeout(function () {
console.log("Waited for 5 seconds for user input")
}, 5000)