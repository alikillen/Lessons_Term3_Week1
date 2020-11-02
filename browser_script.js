// Browser
let name = prompt("What is your name!")
console.log("Hello " + name )

// note: unlike, terminal prompt blocks io port as there is no callback function
console.log("Does not execute until prompt is completed")

setTimeout(function(){
    console.log("Hello after 3 seconds")
}, 3000)