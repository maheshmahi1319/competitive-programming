/**
 * The function finds the second largest number in an array.
 * @param arr - an array of numbers for which we want to find the second largest number.
 * @returns the second largest number in the input array.
 */
function secondlargestNumber(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] < firstMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
