function reverseWords(sentence) {
  let reversingWord = "";

  for (let i = 0; i < String(sentence).length; i++) {
    reversingWord = reversingWord + sentence.charAt(i);
  }

  return reversingWord;
}

const sampleInput = {
  input1: "hello world",
  input2: "javaScript is fun",
  input3: " multiple   spaces  ",
  input4: "",
  input5: "OneWord",
};
const input6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data = String(sampleInput.input3).split("");
const originalData = String(sampleInput.input3).split("");
console.log("check: -", input6.splice(1));

const output = [];
data.forEach((v, i) => {
  if (v == " ") output.push(v);
  if (v != " ") {
  }
});

// split " " and then push " ", reverse word

// console.log(
//   Object.keys(sampleInput).map((k) => {
//     return { [`${k} - ${sampleInput[k]}`]: reverseWords(sampleInput[k]) };
//   })
// );
