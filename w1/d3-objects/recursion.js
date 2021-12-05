// Introduction of Recursion
// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }
const countEvenToTwelve = function(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+2); // recursion
  }
}

countEvenToTwelve(0);
