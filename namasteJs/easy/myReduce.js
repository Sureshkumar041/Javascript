Array.prototype.myReduce = function (callback, initialValue) {
  console.log(typeof callback);

  console.log(callback(1, 3));

  return initialValue;
};

const sampleData = {
  arr1: { input: [1, 2, 3, 4], initialValue: 2 },
  arr2: { input: [1, 2, 3, 4, 5], initialValue: 2 },
  arr3: { input: [], initialValue: 2 },
  arr4: { input: [1, 2, 3, 4, 5, 6], initialValue: 5 },
  arr5: { input: [], initialValue: 3 },
};

console.log(
  `Output: `,
  Object.keys(sampleData).map((k) => {
    return {
      [`${k} - ${sampleData[k].input} - ${sampleData[k].initialValue}`]:
        sampleData[k].input.myReduce(
          (acc, cur) => acc + cur,
          sampleData[k].initialValue
        ),
    };
  })
);
