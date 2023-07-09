/**
 * We filter the array to only those elements that have an indexOf that is not equal to the current
 * index
 * @param arr - the array to search through
 * @returns
 * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
 */
function findDuplicate(arr) {
return arr.filter((ele, index, array) => {
    return array.indexOf(ele) !== index;
});
}
console.log(findDuplicate([1, 2, 3, 4, 5, 5]))

function hasDuplicates(array) {
    const uniqueValues = new Set();
    for (let i = 0; i < array.length; i++) {
      if (uniqueValues.has(array[i])) {
        return true; // Duplicate found
      }
      uniqueValues.add(array[i]);
    }
    return false; // No duplicates found
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5, 2]; // Contains a duplicate value: 2
  console.log(hasDuplicates(myArray)); // Output: true
  
  const anotherArray = [7, 8, 9, 10]; // No duplicates
  console.log(hasDuplicates(anotherArray)); // Output: false
  