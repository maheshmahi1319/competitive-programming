function findPairs(nums) {
    const targetSum = 6;
    const pairs = [];
    const complements = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = targetSum - nums[i];
  
      if (complements.has(nums[i])) {
        pairs.push([complement, nums[i]]);
      }
  
      complements.add(complement);
    }
  
    return pairs;
  }
  
  const nums = [1, 2, 3, 4, 5];
  const pairs = findPairs(nums);
  
  console.log(pairs);
  