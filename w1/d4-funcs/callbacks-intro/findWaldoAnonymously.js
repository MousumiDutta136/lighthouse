
const findWaldo = function(names, found) {
  names.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found waldo at index ${index} !`);
});