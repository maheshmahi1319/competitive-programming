function smallest(arr) {
    arr.sort((a, b) => a - b);
    return arr[0];
  }
  
  function largest(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
  }
  
  console.log(smallest([5, 2, 4, 89, 67, 43, 2, 4]));
  console.log(largest([5, 2, 4, 89, 67, 43, 2, 4]));
  