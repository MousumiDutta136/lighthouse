
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
let typing = "";
// on any input from stdin (standard input), output a "." to stdout
//data here is a type of an event (//click, press)
stdin.on('data', (key) => {
  typing += key;
  // process.stdout.write(".");
  process.stdout.write(key);
  // process.stderr.write("error");
// \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.stdout.write(typing);
    process.stdout.write('\n');
    process.exit();
  }
});

console.log('after callback');




// const round = function(number) {
//   return Math.round(number * 100) / 100;
// };

// const median = function(arr) {
//   /* IMPLEMENT ME */


//   let medianNumber;
//   arr.sort();

//   if (arr.length % 2 !== 0) {
//     medianNumber = round(arr.length / 2);
//     return (arr[medianNumber]);
//   } else {
//     medianNumber = arr.length / 2;
//     return (arr[medianNumber]);
//   }
// };


// console.log(median([6,2,3,4,9,6,1,0,5]));

// const isPalindrome = function(s) {
//   // let stringReverse = s.split("").reverse().join("");
//   let stringReverse = s.reverse().split("").join("");
//   console.log(stringReverse)
//   return s == stringReverse;
// };

// const phrase = "a man a plan a canal panama";
// isPalindrome(phrase);

// module.exports = isPalindrome;


// const middle = function(arr) {
//   let middleArray = [];
//   if (arr.length >= 3) {
//     const middleIndex = Math.floor(arr.length / 2);
//     if (arr.length % 2 === 0) {
//     //even
//     otherIndex = middleIndex - 1;
//     middleArray.push(arr[otherIndex], arr[middleIndex]);
//     return middleArray;
//     } else {
//     //odd
//     return (arr[middleIndex]);
//     }
//   } else {
//     return [];
//   }  
// };

// // middle([1, 2, 3, 4, 5]), [3]);
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3]), [2]);
// console.log(middle([1, 2, 3, 4, 5]), [3]);


