function sumN(n) {
  if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
    return false;
  }

  let sumVal = 0;
  for (let i = 1; i <= n; i++) {
    sumVal = sumVal + i;
  }

  return sumVal;
}

const sampleInput = {
  base0: 0,
  base1: 1,
  smallNo0: 2,
  smallNo1: 3,
  smallNo2: 5,
  largerNo0: 10,
  largerNo1: 100,
  invalidVal0: -1,
  invalidVal1: 1.5,
  invalidVal2: "5",
  invalidVal3: null,
  invalidVal4: [],
};

console.log(
  `Output: `,
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: sumN(sampleInput[k]) };
  })
);
