/**
 * It loops through the range of numbers between the initial and final values, and if the number is not
 * found in the array, it is pushed to the missing array
 * @param arr - an array of integers
 * @param intialValue - the first number in the range of numbers to check
 * @param finalValue - the highest number in the range of numbers to be checked
 */
function missingNumbers (arr, intialValue, finalValue) {
  let missing = [];
  for (let i = intialValue; i <= finalValue; i++) {
    if (arr.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  console.log(missing);
}

missingNumbers([2,3,4,5,6], 1,10);


function missingNumbersWithArrayLength (a, n ) {
    let total = Math.floor((n + 1) * (n + 2) / 2);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
  }
  console.log(missingNumbersWithArrayLength([2,3,4,5,6,8],6))