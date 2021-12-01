//Kata 14 - Change Calculator

//Valid denominations are as follows:
//Twenty dollars -> 2000
//Ten dollars -> 1000
//Five dollars -> 500
//Two dollars -> 200
//One dollar -> 100
//Quarter (25¢) -> 25
//Dime (10¢) -> 10
//Nickel (5¢) -> 5
//Penny (1¢) -> 1

const calculateChange = function(total, cash) {
  // Your code here
  const changeDetails = Object();
  let change = cash - total;
  let rem, quo;  
  do{
    
    if(change >= 2000){
      rem = change % 2000;
      quo = (change - rem) / 2000;
      change = rem;
      changeDetails.twentyDollar = quo;
    }else if(change >= 1000){
      rem = change % 1000;
      quo = (change - rem) / 1000;
      change = rem;
      changeDetails.tenDollar = quo;
    }else if(change >= 500){
      rem = change % 500;
      quo = (change - rem) / 500;
      change = rem;
      changeDetails.fiveDollar = quo;
    }else if(change >= 200){
      rem = change % 200;
      quo = (change - rem) / 200;
      change = rem;
      changeDetails.twoDollar = quo;
    }else if(change >= 100){
      rem = change % 100;
      quo = (change - rem) / 100;
      change = rem;
      changeDetails.oneDollar = quo;
    }else if(change >= 25){
      rem = change % 25;
      quo = (change - rem) / 25;
      change = rem;
      changeDetails.quarter = quo;
    }else if(change >= 10){
      rem = change % 10;
      quo = (change - rem) / 10;
      change = rem;
      changeDetails.dime = quo;
    }else if(change >= 5){
      rem = change % 5;
      quo = (change - rem) / 5;
      change = rem;
      changeDetails.nickel = quo;
    }else if(change >= 1){
      rem = change % 1;
      quo = (change - rem) / 1;
      change = rem;
      changeDetails.penny = quo;
    }
  } while (change > 0);
  return changeDetails;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));