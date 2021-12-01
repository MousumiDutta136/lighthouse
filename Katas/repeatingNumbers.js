//Kata 8 - Repeating Numbers

const repeatNumbers = function(data) {
  // Put your solution here
  let result = "";  
  let count = 0;
  for (let i = 0; i < data.length; i++){
    let j = 0;
    for(let j = 0; j < data[i][1]; j++){
      result += data[i][0]; 
    }
    if (i < data.length - 1){
      result = result + ",";  
    }
  }  
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));