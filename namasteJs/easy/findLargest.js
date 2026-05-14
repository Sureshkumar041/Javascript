function findLargest(arr) {
  // your solution here

  if (!Array.isArray(arr) || !arr.every((v) => Number.isFinite(v)))
    return false;

  if (arr.length === 0) return null;

  return arr.reduce(
    (acc, cur) => {
      return cur > acc ? cur : acc;
    },
    `${arr[0]}` ? arr[0] : null
  );
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
  decimal: [2.0, 2.2],
  invalidNull: null,
  invalidUn: undefined,
  num: 48,
  str: "8",
  paran: {},
  invalid1: [1, "2"],
  invalidNaN: [NaN],
  invalidInfi: [Infinity],
  negativeVal: [-1, -2, -100],
  withZero: [0, 2, 5],
};

console.log(
  `Output: `,
  Object.keys(testingData).map((k) => {
    return { [`${k} - ${testingData[k]}`]: findLargest(testingData[k]) };
  })
);
