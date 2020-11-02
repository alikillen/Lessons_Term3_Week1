//Scope of the let statement is in the block where it is declared and its sub blocks.
function letTest() {
  let x = 1; // Block Scope 1
  if (true) {
    let x = 2;  // Block Scope 2
    console.log("Inside If statement");
    console.log(x);  // 2
    let f = function() {
      let x = 3; // Block Scope 3
      console.log("Inside the function f");
      console.log(x); // 3
    }
    f();
  }
  console.log("Inside the main function but outside the if statement");
  console.log(x);  // 1
}
letTest();

// Observe how let has block scope only.

//Scope of the var statement is global and is accessible through all the code blocks.
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; 
    console.log(x);  // 2
  }
  // The value of x has got changed
  console.log(x);  // 2
}
varTest();

// Scope of the "const" statement is similar to that of "let"
function constTest() {
  const x = 1; // scope is global within this function
  if (true) {
    const x = 2; // scope is limited within the if statement
    console.log(x); // 2
  }
  console.log(x); // 1
}
constTest();