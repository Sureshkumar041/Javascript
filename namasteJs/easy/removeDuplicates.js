function removeDuplicates(arr) {
  const uniqueVal = new Set(arr);
  return [...uniqueVal];
}

const sampleInput = {
  input1: [1, 2, 3, 4, 4],
  input2: ["a", "b", "a", "c"],
  input3: [1, "1", 1],
  input4: [],
  input5: [true, false, true],
};

console.log(
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: removeDuplicates(sampleInput[k]) };
  })
);
