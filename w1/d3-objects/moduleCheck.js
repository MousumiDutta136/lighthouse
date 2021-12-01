// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/Users/superman/codes/moduleCheck.js',
//   loaded: false,
//   children: [],
//   paths: [ ... ] 
// } 
// console.log(module);

const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
};

module.exports = sayHelloTo;