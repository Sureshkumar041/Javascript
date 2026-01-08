const reverseWord = (str = "") => {
  let reversedWord = "";
  for (let i = String(str).length; i >= 0; i--) {
    reversedWord = reversedWord + str?.charAt(i);
  }
  return reversedWord;
};

const reversedWord = reverseWord("suresh kumar");
const a = 10;

console.log("reversedWord: ", reversedWord);
const arr = Array.from(
  {
    length: 4,
  },
  (e, i) => i + 1
);
console.log("Arr slice: ", arr?.slice(1));
