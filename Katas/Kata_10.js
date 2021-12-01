//Kata 10 - Multiplication Table
//We will be given a number as our input data. This number is the highest value of our multiplication table. 
//Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = function(maxValue) {
  // Your code here
  let multiTable ="";
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      multiTable = multiTable + ( j * i) ;
    }
    multiTable = multiTable + "\n";
  }
  return multiTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));