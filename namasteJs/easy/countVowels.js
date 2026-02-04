function countVowels(str) {
  // Your implementation

  const text = String(str ?? "").toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  const count = text.split("").reduce((acc, cur) => {
    return vowels.includes(cur) ? acc + 1 : acc;
  }, 0);

  return count;
}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));
