function sumN(n) {
  // your solution here

  return n;
}

const sampleInput = {
  input1: 2,
};

console.log(
  `Output: `,
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: sumN(sampleInput[k]) };
  })
);
