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

// const a