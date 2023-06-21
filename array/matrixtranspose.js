function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transposedMatrix = [];
  
    for (let j = 0; j < cols; j++) {
      transposedMatrix[j] = [];
      for (let i = 0; i < rows; i++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log(transposedMatrix);
 

  //second
  function transposeMatrix(matrix) {
    const transposedMatrix = [
      [matrix[0][0], matrix[1][0], matrix[2][0]],
      [matrix[0][1], matrix[1][1], matrix[2][1]],
      [matrix[0][2], matrix[1][2], matrix[2][2]]
    ];
  
    return transposedMatrix;
  }
  