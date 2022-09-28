// //[1,3,-5,6,-5,7]

// /**
//  * We keep track of the current sum and the maximum sum. We iterate through the array and add the
//  * current element to the current sum. If the current sum is greater than the maximum sum, we update
//  * the maximum sum. If the current sum is less than 0, we reset the current sum to 0
//  * @param arr - the array of numbers
//  */
function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal
}

console.log(maxSubArray([1,3,-5,6,-5,7]))