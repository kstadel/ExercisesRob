const arr = [2,30,4,0,10,15]

function sortedFunction(arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let n = 0;
      if (arr[i] > arr[j]) {
        n = arr[i];
        arr[i] = arr[j];
        arr[j] = n;
      }
    }
    sortedArr.push(arr[i]);
  }
  return sortedArr;
}

console.log(sortedFunction(arr));
module.exports = { sortedFunction };
