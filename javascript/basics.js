// //////////////////////////
// THE 3 BASICS OF A NEW LANG
// //////////////////////////

// 1. The docs:
// - MDN (exhaustive but hard): https://developer.mozilla.org/en-US/docs/Web/JavaScript
// - W3School (easy for beginners): https://www.w3schools.com/js/

// 2. How to run JS?
// To test one line of code, run in the console: node
// To run a file, run in the console: node hello.js

// 3. How to print?
console.log("Hi #2255");

// //////////////////
// RUBY VS JAVASCRIPT
// //////////////////

// 1. var, const, let and the lower camel case
// first_name = "Archie" RUBY

// 'const' CANNOT be reassigned
const firstName = "Archie";
// firstName = "Super Archie" NOT POSSIBLE!

// 'let' CAN be reassigned
let age = 21;
age += 1;
console.log(age);

// 'var' is the obsolete let (almost!)

// 2. interpolation
// Note: use backticks (`) for interpolation

// "#{firstName} is #{age}" RUBY
console.log(`${firstName} is ${age}`);

// 3. no float/integer
console.log(typeof 42);
console.log(typeof 42.13);

// 4. how toString/parseInt works
// Note: toString doesn’t work without ()
// .to_i
console.log("24");
console.log(Number("24")); // ~= .to_i
console.log(parseInt("24", 10)); // ~= .to_i

// can be used to convert into binary

// Base10 Binary
// 0      0
// 1      1
// 2      10
// 3      11
// 4      100
// 5      101

console.log(parseInt("101", 10));
console.log(parseInt("101", 2));

// .to_s
console.log(42);
console.log((42).toString());

// 5. delete element in an array with splice
const students = ["Alain", "Deniz", "Ayda", "Anna"];

// students.splice(-3, 2); // deletes 2 elements from index 0
// students.splice(0, 2, "Joao", "Luka"); //same above, but then add 2 elements
console.log(students);

// students[-1] // DOESN'T WORK IN JS
// students.at(-1) // WORKS

// 6. iterate over an array
// JS arrow function:  () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

// 7. join() returns adds commas
// [1,2,3].join  ==> "123"  RUBY
// [1,2,3].join() ==> "1,2,3" JAVASCRIPT
// [1,2,3].join("") ==> "123" JAVASCRIPT
// [1,2,3].join("~") ==> "1~2~3" JAVASCRIPT

// 8. object, the magic dot!
const anotherStudent = {
  firstName: "Luka",
  lastName: "Bilić",
};

// anotherStudent = {} // NOT OKAY for CONST

console.log(anotherStudent["firstName"]);
console.log(anotherStudent.firstName);

anotherStudent.firstName = "Super Luka";
console.log(anotherStudent);

// 9. === VS ==
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// > 1 == 1
// true
// > 1 == '1'
// true
// > 1 === '1'
// false

// 10. the JS falsies:
if ("") {
  console.log("This is true!");
} else {
  console.log("This is false!");
}

false;
null;
0;
("");
undefined;
NaN;

// 11. JS arrow functions () => {}
// Note: they look like a 'very special' variable
const square = (num) => {
  return num * num;
};

// const square = num => num * num;

console.log(square(42));
