//Kata 9 - Case Maker
//We will receive a normal string of words separated with spaces as the input. 
//Our job is to convert these strings into camel cased strings.

const camelCase = function(input) {
  // Your code here
  let finalString = "";
  let stringLength = input.length;
  for(let i = 0; i < stringLength; i++){
    if(input[i] === " "){
      finalString = finalString + input[i+1].toUpperCase();
    }else {
      if(input[i - 1] === " "){
        continue
      }else {
        finalString = finalString + input [i];
      }      
    }  
  }
return finalString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
