const dice = process.argv.slice(2);
// console.log(dice);

const rollingDice = function(rollingTimes){
  let result = [];
  for (let i = 1; i <= rollingTimes; i++){
    result.push(Math.floor(Math.random() * 6));
  }  
  return (`Rolled ${rollingTimes} dice: ${result.join()}`);
};

console.log(rollingDice(Number(dice[0])));