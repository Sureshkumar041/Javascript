function findMissingNumber(nums) {
  const arr = nums.sort((a, b) => a - b);

  let res = null;
  for (let i = 0; i < arr.length; i++) {
    const expectingNum = arr[i] + 1;

    if (i === 0 && arr[0] !== 0) {
      res = 0;
      break;
    }

    if (!arr.some((v) => v === arr[i] + 1)) {
      res = expectingNum;
      break;
    }
  }

  return res;
}

const sampleInput = {
  input0: [3, 0, 1],
  input1: [0, 1],
  input2: [9, 4, 2, 0, 7, 1, 3, 6, 5],
  input3: [0],
};

//For the purpose of user debugging.
console.log(
  `Output: `,
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: findMissingNumber(sampleInput[k]) };
  })
);
