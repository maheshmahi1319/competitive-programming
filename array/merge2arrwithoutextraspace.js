/**
 * Given two arrays, return a new array that contains the elements of both arrays.
 * @param arr1 - [1, 3, 6, 8, 11]
 * @param arr2 - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
function mergeArrays(arr1, arr2) {
let temp =0;
while (arr2[0] < arr1[n-1]) {
    if(arr1[i] > arr2[0]) {
        temp = arr1[i];
        arr1[i] = arr2[0];
        arr2[0] = temp;
        arr2.sort((a,b) => a-b);
    }
}


return {arr1,arr2}
}