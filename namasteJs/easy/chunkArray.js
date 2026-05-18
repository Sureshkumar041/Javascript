function chunkArray(arr, n) {
  const res = arr.reduce((acc, cur, i) => {
    const lastEle = acc.length ? acc[acc.length - 1] : [];
    return acc.length && lastEle.length
      ? lastEle.length < n
        ? [...acc.splice(0, acc.length - 1), [...lastEle, cur]]
        : [...acc, [cur]]
      : [[cur]];
  }, []);

  return res;
}

const sampleData = {
  arr1: { input: [1, 2, 3, 4], chunkSize: 2 },
  arr2: { input: [1, 2, 3, 4, 5], chunkSize: 2 },
  arr3: { input: [], chunkSize: 2 },
  arr4: { input: [1, 2, 3, 4, 5, 6], chunkSize: 5 },
  arr5: { input: [], chunkSize: 3 },
};

console.log(
  `Output: `,
  Object.keys(sampleData).map((k) => {
    return {
      [`${k} - ${sampleData[k].input} - ${sampleData[k].chunkSize}`]:
        chunkArray(sampleData[k].input, sampleData[k].chunkSize),
    };
  })
);
