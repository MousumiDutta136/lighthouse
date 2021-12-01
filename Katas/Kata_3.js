//counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const myArray = data.split("", );
  
  for (let i = 0; i< vowels.length; i++){
    for(let j = 0; j < myArray.length; j++){
      if(myArray[j] === vowels[i] ){
        count += 1;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));