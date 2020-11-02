// NON PRIMITIVE DATATYPES

greet = (name) => console.log(`hello ${name}`)

var data = ["zeb", "alex", "varsha", 10, 20, true, greet]

console.log(data[6])

// we have pointed to function within array - greet
// FUNCTIONS CAN BE A DATATYPE - this is the main diff between ruby and JS
// this is why arrays are not primitive - you can have a function within them


data[6]("jason")
// this is calling the function greet and passing it the params of jason? aka greet(jason)

data[6](data[0])
// returns hello zeb - wooooow!!

var names =  ["zeb", "varsha", "alex"]
names.push("carl")
console.log(names)

names.pop("carl")
console.log(names)

names.unshift("lavanya")
console.log(names)

names.shift("lavanya")
console.log("latest names array: " + names)

// see array methods in W3 schools

// EACH METHOD - iterates through elements and performs a certain action
// cant do each method on a string


names.forEach(name => {
  console.log(`hello ${name}`)
});
// name on this line can mean anything, its like the pipe character in ruby
// goes through each element and performs function (inside {})

// MAP operation
// MAP takes an old array and returns a new array
console.log("lets look at MAP")

newData = names.map(name => {
  return `hello ${name}`
})
// name is the iterating variable (pipe)
// when writing JS functions, use RETURN by default
// MAP saves us from mutating the original data - you're assigning the output value in a new variable
console.log(names)
console.log(newData)

console.log("ITS PASTA TIME------------------")

let pasta = ["gnocci", "ravioli", "spagetti"]

console.log(pasta)

pasta.forEach(type => {
  console.log(`I love ${type}`)
})


newPasta = pasta.map(type =>{
  return `hello ${type}`
})

console.log(newPasta)

// in node, if you set var names to zeb, varsha, alex, 
// and set copyNames = names,
// and enter names[0] = "nands"
// and print names 
// it will have nands instead of zeb as element 0
// because you're pointing to same memory location - this is how arrays behave in ruby and JS and C - pass by reference
// so copying should be done at deeper level
// copynames and names are same in memory

// IN ES6, we have rest operator
// to copy an array, use a rest operator ...

var things = ["watch", "mouse", "monitor"]

// deep copy

var[...copyThings] = things
things[0] = "bottle"
console.log(things)
console.log(copyThings)
// original things array0 has changed to bottle, copy remains a copy of the OG
// whenever copying an array or object, do a deep copy with a rest operator!!

num1 = 10
num2 = num1
num1 = 20
console.log(num1)
console.log(num2)
// it wont mutate OG because numbers are a permitted datatype

// only non primitive datatypes get mutated - they are passed by reference
// if its a primitive datatype its passed by value