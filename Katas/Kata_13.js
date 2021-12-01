//Kata 13 - Talking Calendar

const talkingCalendar = function(date) {
  // Your code here
  let year = date.slice(0,4);
  let month = parseInt(date.slice(5,7));
  let day = parseInt(date.slice(8));

  switch(month){
    case 01:
      month = "January";
      break;
    case 02:
      month = "February";
      break;
    case 03:
      month = "March";
      break;
    case 04:
      month = "April";
      break;
    case 05:
      month = "May";
      break;
    case 06:
      month = "June";
      break;
    case 07:
      month = "July";
      break;
    case 08:
      month = "August";
      break; 
    case 09:
      month = "September";
      break;  
    case 10:
      month = "October";
      break;  
    case 11:
      month = "November";
      break;  
    case 12:
      month = "December";
      break;         
  }
  let dayAdding = "";
  switch(day){
    case 01:
    case 21:
    case 31:
      dayAdding = "st";
      break;
    case 2:
    case 22:
      dayAdding = "nd";
      break;
    case 3:
    case 23:
      dayAdding = "rd";
      break;
    default:
      dayAdding = "th";
      break;
  }
  return month + " " + day + dayAdding + ", " + year;
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));