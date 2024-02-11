
const { sortingFunction } = require('../utils/sortingFunction');

const matrix = [[10,2,5],[20,4,11],[1,80,6]]

let matrixSorted = []

for(let i=0; i<matrix.length; i++){
    matrixSorted.push(sortingFunction(matrix[i]))
}

console.log(matrixSorted)

// expected result: [[ 2, 5, 10 ], [ 4, 11, 20 ], [ 1, 6, 80 ] ]