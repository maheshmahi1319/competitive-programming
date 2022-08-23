// fibonacci series in javascript
/**
 * It takes a number as an argument and returns an array of the fibonacci series up to that number
 * @param num - The number of elements in the Fibonacci series.
 * @returns [0, 1, 1, 2, 3, 5, 8]
 */
// const fibonacciSeries = (num) => {
//     let arr = [];
//     for(let i = 0; i <= num; i++) {
//       if(i == 0 || i == 1){
//         arr[i] = i;
//         console.log(arr)
//       }else{
//         arr[i] = arr[i - 1] + arr[i - 2];
//         console.log(arr)
//       }
//     }
//     return arr;
// }
// console.log(fibonacciSeries(6)) //[ 0, 1,  1,  2,  3, 5, 8];

// number fibonnaci to array format
function fibonacci(nums) {
  
    let fib = [0, 1];
    let data = [];
    
    for(let i = 2; i <= nums; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
      data.push(fib[i]);
    }
    
    return fib;
  }

  console.log(fibonacci(6))