

  // Put your solution here
  // console.log(matrix);
  const transpose = (matrix) => {
    // console.log('before matrix', matrix)
    // console.log(matrix.length);
    let transposeArray = [];

    matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
//     for (var i = 0; i < matrix.length; i++) {
//       for (var j = 0; j < i; j++) {
//         const temp = matrix[i][j];
//         console.log(temp);
//         matrix[i][j] = matrix[j][i];
//         matrix[j][i] = temp;
//       }
//     }
//     console.log('after matrix', matrix)
    return matrix;
};

// Do not edit this function.
// console.log(matrix);
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

// 1 3 5 
// 2 4 6

console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));