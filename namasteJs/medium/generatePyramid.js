function generatePyramid(n) {
  // your solution here

  if (!Number.isFinite(n) || n < 0) return false;

  const arr = [];

  for (let index = 0; index < n; index++) {
    let ele = "";

    // for (let i = 0; i < array.length; i++) {}

    arr.push();

    console.log("index: ", index);
  }

  return arr;
}

// 2n-1 -> 2(3)-1 -> 5
const arr = ["  *  ", " *** ", "*****"];

// 11
// *
// 11

// 1
// ***
// 1

// *****

const sampleInput = {
  //   input0: 0,
  //   input1: 1,
  input2: 3,
  //   input3: 5,
  //   input4: -1,
  //   input5: undefined,
};

console.log(
  `Output: `,
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: generatePyramid(sampleInput[k]) };
  })
);
