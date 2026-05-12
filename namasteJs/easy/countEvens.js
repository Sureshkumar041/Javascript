function countEvens(arr) {
  // your solution here

  if (!Array.isArray(arr) || !arr.every((v) => Number.isFinite(v)))
    return false;

  return arr.reduce((acc, cur) => {
    return acc + (cur % 2 === 0);
  }, 0);
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

console.log(`Output of empty: `, countEvens(testingData.empty));
console.log(`Output of singleEven: `, countEvens(testingData.singleEven));
console.log(`Output of singleOdd: `, countEvens(testingData.singleOdd));
console.log(`Output of mixedArr1: `, countEvens(testingData.mixedArr1));
console.log(`Output of mixedArr2: `, countEvens(testingData.mixedArr2));
console.log(`Output of even: `, countEvens(testingData.even));
console.log(`Output of noEven: `, countEvens(testingData.noEven));
console.log(`Output of zero1: `, countEvens(testingData.zero1));
console.log(`Output of zero2: `, countEvens(testingData.zero2));
console.log(`Output of decimal: `, countEvens(testingData.decimal));
console.log(`Output of invalidNull: `, countEvens(testingData.invalidNull));
console.log(`Output of invalidUn: `, countEvens(testingData.invalidUn));
console.log(`Output of num: `, countEvens(testingData.num));
console.log(`Output of str: `, countEvens(testingData.str));
console.log(`Output of paran: `, countEvens(testingData.paran));
console.log(`Output of invalid1: `, countEvens(testingData.invalid1));
console.log(`Output of invalidNaN: `, countEvens(testingData.invalidNaN));
console.log(`Output of invalidInfi: `, countEvens(testingData.invalidInfi));
console.log(`Output of negativeVal: `, countEvens(testingData.negativeVal));
console.log(`Output of withZero: `, countEvens(testingData.withZero));

module.exports = { countEvens };
