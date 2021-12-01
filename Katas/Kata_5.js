//Kata 5 - Percent Encoded String
// replacing the space with %20
//a function named urlEncode that will receive a string of words, 
//and return that string with all of the whitespace characters converted to %20. 
//If there is whitespace on the outside of the string, it should only replace the whitespace within the string.


const urlEncode = function(text) {
  // Put your solution here  
  
   let finalString = "";
   stringLength = text.length;
   console.log(stringLength);
   for(let i = 0; i < stringLength; i++){
    if (text[i] === " "){
      if(i === 0 || i === stringLength - 1){
        continue;        
      }else{
        finalString = finalString + "%20"; 
      }    
      
    } else {
      finalString = finalString + text[i];
    }       
  }
  return finalString;  
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));