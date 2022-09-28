// /**
//  * The outer loop is picking the starting character, the inner loop is generating all possible
//  * substrings by which the outer loop is picking one by one
//  * @param str - The string to be printed.
//  */
// function printSubStrings( str) {
//     let arrs = [];
 
//     // First loop for starting index
//     for (i = 0; i < str.length; i++) {
//         var subStr = "";

//         // Second loop is generating sub-String
//         for (var j = i; j < str.length; j++) {
//             subStr += str.charAt(j);
//             arrs.push(subStr);
//         }
//     }
// //     let set = new Set(arrs);
// // console.log(set,arrs);
// let arr3 =arrs.map(item => {
//     const chars = {};
//     for (const char of item) {
//         chars[char] = (chars[char] || 0) + 1;
//     }
//     return Object.entries(chars).filter(char => char[1] > 1).map(char => char[0]);
// })
// let arr4  =arr3.filter(item=> {
//     if(item.length ==1) {
//         return item;
//     }
// })
// let count = arr3.length-arr4.length;
// console.log(count, arr3, arr4);
// }

//console.log(printSubStrings('abbc'));

const findUniqueSubstrings = (str) => {
    const arr = [...str].reduce((acc, _, idx) =>
      acc.concat(Array.from({length: str.length}, (_, innerIdx) =>
        str.substring(idx, innerIdx + 1)
      )), [])
    return new Set(arr)
  }
  
  function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }
  console.log(findUniqueSubstrings("abbc"))