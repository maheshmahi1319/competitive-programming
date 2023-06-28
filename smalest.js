const arrangeArray = (array) => {
    const evenIndices = [];
    const oddIndices = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        evenIndices.push(i);
      } else {
        oddIndices.push(i);
      }
    }
  
    const reversedEvenIndices = evenIndices.reverse();
  
    const newArray = [];
    newArray.push(...oddIndices);
    newArray.push(...reversedEvenIndices);
  
    return newArray;
  };
  
  const array1 = [1, 2, 3, 4, 5, 6];
  console.log("Original array 1:", array1);
  const newArray1 = arrangeArray(array1);
  console.log("Rearranged array 1:", newArray1);
  
  const array2 = [1, 2, 3, 4, 4, 4];
  console.log("Original array 2:", array2);
  const newArray2 = arrangeArray(array2);
  console.log("Rearranged array 2:", newArray2);
  