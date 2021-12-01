const raisinAlarm = function(cookie) {
  for (let element of cookie) {
    // console.log(element);
    if (element === "🍇") {
      return ("Raisin Alert!");
    }
  }
  return ("All good!");
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

//STRETCH GOAL

const raisinAlarmArray = function(cookies) {
  let alertArray = [];
  let raisinflag = false;
  for (const item of cookies) { //iterate through the main array
    // console.log(item);
    raisinflag = false;
    for (let element of item) { //iterate through each sub array, checking for raisins
      // console.log(element);
      // console.log(element);
      // let raisinflag = false;
      if (element === "🍇") {
        alertArray.push("Raisin Alert!");
        raisinflag = true;
        break;
      }
    }
    if (raisinflag === false) {
      alertArray.push("All good!");
    }
  }
  return alertArray;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));