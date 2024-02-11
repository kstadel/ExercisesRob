function sortingFunction(arr) {
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
  
  module.exports = { sortingFunction };