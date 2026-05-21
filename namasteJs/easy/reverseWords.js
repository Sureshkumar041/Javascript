function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((v) => {
      return v === " " ? " " : v.split("").reverse().join("");
    })
    .join(" ");
}

const sampleInput = {
  input1: "hello world",
  input2: "javaScript is fun",
  input3: " multiple   spaces  ",
  input4: "",
  input5: "OneWord",
};

console.log(
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: reverseWords(sampleInput[k]) };
  })
);
