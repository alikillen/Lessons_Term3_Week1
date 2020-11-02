var profile = new Object(); 
// not reccomended by airbnb style guide

var profile = {};
// reccommended

var profile = {
  name: "kalyani",
  age: 20,
  hobbies: ["coding", "painting"],
  address: {
    street: 10,
    city: "sydney"
  },
  greet:(name)=> {
    return `hello ${name}`
  }
}

// can pass an onject inside an object as a value
// can have functions inside an object - diff from ruby

// can be called in 2 ways:
console.log(profile.name)
// console.log(profile[name])
console.log(profile['name'])
console.log(profile.address.city)
console.log(profile['address']['city'])
console.log(profile['address'].city)
// dont do that last one

var {...copyProfile} = profile
profile.name = "Alex"
console.log(profile)
console.log(copyProfile)