function findMaxNumber(arr) {
  if (!arr.length) return null;

  return arr.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
  }, arr[0]);
}

const testingData = {
  empty: [],
  singleEven: [2],
  singleOdd: [1],
  mixedArr1: [1, 111, 4, 3, -2],
  mixedArr2: [1, 2, 3, 4],
  even: [2, 4, 6],
  noEven: [1, 3, 5],
  zero1: [0],
  zero2: [0, 0, 0],
  negativeVal: [-1, -2, -100],
  withZero: [0, 2, 5],
};

findMaxNumber([1, 2, 3, 4, 5]);

console.log(
  `Output: `,
  Object.keys(testingData).map((k) => {
    return { [`${k} - ${testingData[k]}`]: findMaxNumber(testingData[k]) };
  })
);
