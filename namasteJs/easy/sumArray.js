function sumArray(arr) {
  function helper(i) {
    // your solution here

    return i.reduce((acc, cur) => {
      return cur + acc;
    }, 0);
  }
  return helper(arr);
}

const sampleData = {
  sampleData1: [1, 2, 3],
  sampleData2: [5],
  empty: [],
  withNegative1: [-1, 5, -4],
  withNegative2: [1, -4],
  withDecimal1: [1.5, 2.3, 3],
  withDecimal2: [-1.2, 2.2],
  largeSet1: [1, 20, 40, 3, 50, 60],
};

console.log(
  `sampleData: `,
  Object.keys(sampleData).map((k) => {
    return `${k} is ${sumArray(sampleData[k])}`;
  })
);

// module.exports = { sumArray };
