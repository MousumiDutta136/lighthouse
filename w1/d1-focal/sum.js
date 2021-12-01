// sum of two numbers using process.argv (command line argument) using refactoring (using function)
const args = process.argv.slice(2);
console.log(args);
const sum = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
console.log(sum(Number(args[0]), Number(args[1])));

