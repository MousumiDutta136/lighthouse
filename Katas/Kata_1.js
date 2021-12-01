// an array will be given of 2 or more numbers. 
//We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function(data, times) 
{
  // Put your solution here
  let sum = 0;
  let max = 0;
  let n = data.length;
  
  for (let i = 1; i <= times; i++)
  {
    for (let j = 0; j <n-i; j++)
    {
      if(data[j] > data[j+1])
      {
        max = data[j];
        data[j] = data[j+1];
        data[j+1] = max;
      }
    }
    sum += data[n-i];      
  } 
  return sum;
};
const metric = 2;

console.log(sumLargestNumbers([1, 10], metric));
console.log(sumLargestNumbers([3, 1, 2], metric));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2], metric));