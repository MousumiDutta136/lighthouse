//recursive approach for sum of whole number starting from 4 to 1 (4+3+2+1)
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
}
console.log(sumToOne(4));