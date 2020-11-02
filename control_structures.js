students = [
  {name: 'Arry Potta', wam: 70, desc: 'yer a lizard harry'},
  {name: 'Bobby Brown', wam: 95, desc: 'hey there folks, im bobby brown'},
  {name: 'Cam Awesome', wam: 100, desc: 'The taylor swift of boxing'},
  {name: 'Hodor', wam: 49, desc: 'hodor hodor hodor, god season 8 was trash'},
  {name: 'Bran Stark', wam: 1, desc: 'Kid looks like caligula, I do not trust him'}
]

// identifier first to be arry potta
let [first] = students;
console.log(first);


// identifier first, second, and theRest
let [x, y, ...z] = students
console.log(x);
console.log(y);
console.log(z);

// array of students and we want the name of first student
let firstname = students[0].name
console.log(firstname)
// this works but need to do it using destructuring

// let [{name}] = students;
// console.log(name)

// how to get second name
let [,{name}] = students;
console.log(name)

// if the second students wam is > 80, tell them HD, otherwise tell them they fail
// change this to ed code
// let grade = students[i].wam
// if (grade > 80) {
// console.log("all good fam")
// }
// else {
// console.log("failuuuure!")
// }

// ternary operator for if
// console.log(students[1].wam > 80 ? "HD" : "Fail")


// switch statements in JS
// switch(students[3].wam) {

//   case range(0,50):
//     console.log("f")
//     break;
  
//   case range(51,99):
//     console.log("p")
//     break;
  
//   case 100:
//     console.log("hd")
//     break;
// };

// harry potter prints "a wizard", bobby brown prints "a song"
// and the rest print "who?"
// switch(students[0].name) {
//   case 'Arry Potta':
//     console.log('a wizard');
//     break;
//   case 'Bobby Brown':
//     console.log('a song');
//     break;
//   default:
//     console.log('who?')
// }


// While the student's grades are not 100, console.log "I am dissapoint"
// let i = 0
// let grade = students[1].wam;
// while (grade < 100) {
//   console.log("I am dissapoint")
//   i++
//   break
  
// else
//  console.log("try harder")
// }

// need to iterate through
// While the student's grades are not 100, console.log "I am dissapoint"
// let i = 0
// while (i < students.length) {
//     if (students[i].wam !== 100) {
//         console.log("I am disapoint")
//     }
//     i++
// }

// for 3 iterations, tell me the desc of a student


  for (let i = 0; i < 3; i++) {
    console.log(students[i].desc) 
  }



// let i = 0
// students[i]

// i++

// name and index of each student using for in loop
for (i in students) {
  console.log(students[i].name + " is at index " + [i])
}

  // function dump_props(obj, obj_name) {
  //   let result = '';
  //   for (let i in obj) {
  //     result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  //   }
  //   result += '<hr>';
  //   return result;
  // }

  // keys and corresponding values for Bran (using for in)

  let bran = students[4]
  for (let key in bran){
    console.log('the key is ${key} and the value is ${bran[key]}')
  }

  // key would be index, but in this object its name, then wam, then desc.

  // for of loop for desc of each student

  // const arr = students
  //  arr.foo = 'hello';

for (let student of students) {
   console.log(student.name + " : " +student.desc); // logs "0", "1", "2", "foo"
}

// for (let i of arr) {
//    console.log(i); // logs 3, 5, 7
// }

// higher order functions - functions that take functions as arguments - like a ruby function that takes a block

// array of the wams for students, using the map higher order function

const map_students = students.map(x => x.wam);
console.log(map_students)

// let arr = students[i].wam

// console.log(arr)

// let newlist = students.map(studentname => students.name)
// console.log(newlist)

// filter - gets rid of false values from the block

// filter all students so if they have marks greater than 50 theyre returned

// const grade = students[i].wam

// console.log(grade)

// const result = grade.filter(wam => wam > 50);

// console.log(result);

// predicate functions only return true or false

let marks = students.filter(student => student.wam > 50)
console.log(marks)

// first student w grades less than 50

console.log(students.find(student=>student.wam > 50))

// reduce
console.log(students.reduce((acc,student)=> acc+student.wam, 0)) 
// second half is whats being returned

// let sumOfWam = students.wam.reduce(
//   (accumulator, currentValue) => acc + curr
// )

// const reducedFilter = (data, keys, fn) =>
//   data.filter(fn).map(el =>
//     keys.reduce((acc, key) => {
//       acc[key] = el[key];
//       return acc;
//     }, {})
//   );