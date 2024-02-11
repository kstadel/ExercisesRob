const matrix = [[6,2,10], [20,30,100], [1,80,43]]

// get the smallest value out of each matrix element and store it in an array
// check this out to find the smallest value in each
// https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript

let smallestValues = []

for(let i=0; i<matrix.length; i++){

    min = Math.min(...matrix[i])
    smallestValues.push(min)

}

console.log(smallestValues)

// expected result: [2, 10, 1]