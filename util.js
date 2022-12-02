function matrixProduct(mat1, mat2) {
  let row = mat1.length;
  let col = mat1[0].length;
  let row2 = mat2.length;
  let col2 = mat2[0].length;
  if (col === row2) {
    let result = [];

    for (let a = 0; a < row; a++) {
      result[a] = [];
      for (let b = 0; b < col2; b++) {
        result[a][b] = 0;
      }
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col2; j++) {
        let temp = 0;
        for (let k = 0; k < col; k++) {
          temp += mat1[i][k] * mat2[k][j];
        }
        result[i][j] = temp;
      }
    }
    return result;
  }
}
function sumOfMatrices(mat1, mat2) {
  let result = [];
  if (mat1.length === mat2.length && mat1[0].length === mat2[0].length) {
    for (let a = 0; a < mat1.length; a++) {
      result[a] = [];
      for (let b = 0; b < mat2[0].length; b++) {
        result[a][b] = 0;
      }
    }

    for (let i = 0; i < mat1.length; i++) {
      for (let j = 0; j < mat2.length; j++) {
        result[i][j] = mat1[i][j] + mat2[i][j];
      }
    }
  }
  return result;
}

//
function sumOfArray(arr) {
  let temp = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  result.push(temp);
  return result;
}

function sumOfEachRow(mat) {
  let result = [];
  for (let i = 0; i < mat.length; i++) {
    result.push(sumOfArray(mat[i]));
  }
  return result;
}

//
function countWords(text) {
  let count = 0;
  text = text.split(" ");

  for (i = 0; i < text.length; i++) {
    if (text[i] != "") {
      count++;
    }
  }
  return count;
}

function trim(text) {
  let temp = "";

  let start = 0;
  let end = text.length-1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " ") {
      start = i;
      break;
    }
  }
  for (i = text.length - 1; i > start; i--) {
    if (text[i] != " ") {
      end = i;
      break;
    }
  }
  for (i = start; i <= end; i++) {
    temp += text[i];
  }
  text = temp;
  return text;
}

module.exports = {
  matrixProduct,
  sumOfMatrices,
  sumOfArray,
  sumOfEachRow,
  countWords,
  trim,
};
