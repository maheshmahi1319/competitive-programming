const romanToInt = (roman) => {
    const romanToIntMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNum = romanToIntMap[roman[i]];
      const nextNum = romanToIntMap[roman[i + 1]];
  
      if (nextNum && currentNum < nextNum) {
        result -= currentNum;
      } else {
        result += currentNum;
      }
    }
  
    return result;
  };
  
  // Example usage
  console.log(romanToInt("III")); // Output: 3
  console.log(romanToInt("IV")); // Output: 4
  console.log(romanToInt("IX")); // Output: 9
  console.log(romanToInt("LVIII")); // Output: 58
  console.log(romanToInt("MCMXCIV")); // Output: 1994
  