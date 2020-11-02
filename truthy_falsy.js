// in ruby, nil and false are false, everything else is true

// in JS its different

// convert to boolean in node Boolean(true) to find out if true or false
// JS has many falsy values:
// 0 is a falsy value
// empty string is false
// NaN is false
// null
// undefined

// everything else is a truthy value

// useful to know when you're working on short circuit logic or if/else conditional statements

console.log(false || 10)
// second one in OR gets executed

// if name && name.uppercase

console.log(false && 10)
// if first one is false, it wont even check the second since its an & operator, it will just return false

console.log("" && 10)
// but empty string is false??
console.log(NaN && 10)
// returns NaN, why is it returning the false value??
// returns the value because its false!!! we are console logging it, and it returns false, so it returns the false value

console.log(10 || 20)
console.log(10 && 20)
// if second value is true then thats what we get

// SHORT CIRCUIT LOGIC

// OR operators - check for first value, if true, outputs first value. if second value true, outputs that

// AND operators - if first false, returns first value, returns second value if it is also true. if second value false, returns second

console.log(10 && NaN)

// OPERATOR PRECEDENCE

console.log("callum" + 10 + 20)
console.log(10+20 + "callum")
