function checkVotingEligibility(age) {
  return age >= 18 && age <= 150 ? "Eligible to vote" : "Not eligible to vote";
}

const sampleInput = {
  input1: 17,
  input2: 20,
  input3: 18,
  input4: 150,
  input5: 453,
};

console.log(
  `Output: `,
  Object.keys(sampleInput).map((k) => {
    return {
      [`${k} - ${sampleInput[k]}`]: checkVotingEligibility(sampleInput[k]),
    };
  })
);
