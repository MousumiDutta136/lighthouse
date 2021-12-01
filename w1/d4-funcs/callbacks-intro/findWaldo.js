// The second argument/parameter is expected to be a (callback) function
// taking index as a callback function
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

const findWaldo = function(names, found) {
  names.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found waldo! at index  ${index}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);