
// const myFn = function() {
//   console.log("I am function.");
// }
// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }
// runner(myFn);

// // The second argument/parameter is expected to be a (callback) function
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// const actionWhenFound = function() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// const funObject = function() {
//   console.log('I am function.');
// }
// funObject.someAttribute = 42;

const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("Subset of even numbers:", evens);