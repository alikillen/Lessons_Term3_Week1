// Example 1: 
// When a variable i is declared as var (scope is global)
// Inside the for loop in the function, i is declared as let (scope is local)
var i = "z";
let list = ["a","b","c"];

function f()
{
    for (let i of list)
    {
        console.log(i);
    }
    // console.log("Inside function : " + i);
}
console.log("Outside function : " + i);
f(); // Expected output is z a b c z

// Try it : 
// Change var i to let i in the global scope and run the code
// Change the var i to const i in the global scope and run the code

