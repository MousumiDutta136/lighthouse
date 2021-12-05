// printing nested Array
// const printItems = function(items) {
//   for(let item of items) {
//     console.log(item);
//   }
// };

//-------------------------------------------------------------
// const printItems = function(items) {
//   items.forEach(element => {
//     if (Array.isArray(element)) {
//       printItems(element);
//     } else {
//       console.log(element);
//     }
//   });
  
// };

// const obj = {
//   name : 'Eva'
// }
// console.log(obj);

const printItems = function(array) {
  while (array.length > 0) {
    const element = array.shift();
    // console.log('first element', element);
    if (Array.isArray(element)) {
      // console.log('not reversed :', element)
      element.reverse().forEach((newElement)=> {
        // console.log('reversed :', newElement.length)
        array.unshift(newElement);
      });

    } else {
      console.log(element);
    }
  }
}

// const array = ["😎", "💩", "🤗", "😼", "😂"];
//  const array = ["😎", ["💩", "🤗"], "😼", "😂"];
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);