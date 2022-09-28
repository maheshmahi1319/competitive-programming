// let arr = [1, 3, 4];

// function AllPossibleSubsetArray(arr) {
//   arr.sort();
//   let result = [[]];
//   let count, subResult, preLength;
//   for (let index = 0; index < arr.length; index++) {
//     count = 1;
//     while (arr[index + 1] && arr[index + 1] == arr[index]) {
//       count += 1;
//       index++;
//     }
//     preLength = result.length;
//     for (let index2 = 0; index2 < preLength; index2++) {
//       subResult = result[index2].slice();
//       for (let z = 1; z <= count; z++) {
//         if (z > 0) {
//           subResult.push(arr[index]);
//         }
//         result.push(subResult.slice());
//       }
//     }
//   }

//   let finalResult = result.filter((item) => {
//     if (item.length == 2) {
//       return item;
//     }
//   });
//   return finalResult;
// }

// console.log(AllPossibleSubsetArray(arr));

/**
 * For each element in the array, create a new set that contains that element, and concatenate that set
 * with the set of all subsets that existed prior to seeing that element.
 */

// const getAllSubsets = 
//       theArray  => theArray.reduce(
//         (subsets, value) => subsets.concat(
//          subsets.map(set => [value,...set])
//         ),
//         [[]]
//       );


      function getAllSubsets (arr) {
         arr.reduce((subsets, value) =>{
          //  subsets.concat()
            console.log(subsets)
         })
      }


console.log(getAllSubsets([1,2,3,4]));
