const func = require("./util");
const prompt = require("readline-sync");

console.log(func.trim(" dsada "));

console.log(countWords(" sadadsadas adsada sadasdas  asdad     sdasa    dsa "));
const text = prompt.question("Input Your text\n");

console.log(func.countWords(text));
console.log(func.sumOfArray([1, 2, 5, 3]));
console.log(
  func.sumOfEachRow([
    [1, 2],
    [3, 4],
    [5, 6],
    [2, 7],
    [8, 8],
  ])
);

console.log(
  func.sumOfMatrices(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [1, 2],
      [4, 6],
    ]
  )
);
console.log(
  func.matrixProduct(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
    ]
  )
);
