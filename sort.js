/**
 * It swaps the values of two elements in an array
 * @param arr - the array we're sorting
 * @param a - the index of the first item to swap
 * @param b - the index of the first element in the array
 */
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

/**
 * If a is equal to b, return 0; otherwise, if a is less than b, return -1; otherwise, return 1
 * @param a - The first element to compare.
 * @param b - the node to be inserted
 * @returns the result of the comparison.
 */
function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

/**
 * We loop through the array, comparing each pair of adjacent items and swapping them if they are in
 * the wrong order. 
 * 
 * We keep looping through the array until no swaps are needed, which means the array is sorted
 * @param arr - the array to be sorted
 * @param [compare] - a function that takes two elements and returns Compare.LESS_THAN if the first
 * element is less than the second, Compare.BIGGER_THAN if the first element is greater than the
 * second, or Compare.EQUALS if the two elements are equal.
 * @returns The sorted array.
 */
function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // refer to note below
            if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([5,6,2,-1,1,7]))


//
function quickSort(arr, compare = defaultCompare) {
    return quick(arr, 0, arr.length - 1, compare);
}

function quick(arr, left, right, compare) {
    let i;
    if (arr.length > 1) {
        i = partition(arr, left, right, compare);
        if (left < i - 1) {
            quick(arr, left, i - 1, compare);
        }
        if (i < right) {
            quick(arr, i, right, compare);
        }
    }
    return arr;
}

function partition(arr, left, right, compare) {
    const pivot = arr[Math.floor((right, left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compare(arr[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compare(arr[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

// console.log(quickSort([5,6,2,-1,1,7]))

/**
 * We split the array in half, recursively sort each half, and then merge the two sorted halves
 * @param arr - The array to sort.
 * @param [compare] - A function that defines an alternative sort order. The function should return a
 * negative, zero, or positive value, depending on the arguments.
 * @returns The sorted array.
 */
function mergeSort(arr, compare = defaultCompare) {
    if (arr.length > 1) {
        const { length } = arr;
        const middle = Math.floor(length / 2);
        const left = mergeSort(arr.slice(0, middle), compare);
        const right = mergeSort(arr.slice(middle, length), compare);
        arr = merge(left, right, compare);
    }
    return arr;
}

function merge(left, right, compare) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(mergeSort([5,6,2,-1,1,7]))