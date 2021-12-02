// Put your solution here
const transpose = (matrix) => {
  let row = matrix[0].length;// horizontal length of first array
  let col = matrix.length; // vertical length of array
  let output = [];
  for (let r = 0; r < row; r++) {
    let outputRow = [];
    for (let c = 0; c < col; c++) {
      outputRow.push(matrix[c][r]);
    }
    output.push(outputRow);
  }
  return output;
};

// Do not edit this function.
// console.log(transpose());
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

// 1 3 5 
// 2 4 6

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));