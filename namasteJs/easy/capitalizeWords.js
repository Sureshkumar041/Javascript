const capitalizeWords = (str = "") => {
  let capitalizedWords = "",
    splitedWords = String(str).split(" ");
  for (let i = 0; splitedWords.length > i; i++) {
    const word = splitedWords[i].replaceAll(" ", "");

    if (!word) {
      continue;
    }

    capitalizedWords =
      capitalizedWords +
      word.at(0).toUpperCase() +
      word.slice(1).toLowerCase() +
      (splitedWords.length !== i + 1 &&
      (splitedWords[i + 1].replaceAll(" ", "") ||
        splitedWords.slice(i + 1).some((v) => v))
        ? " "
        : "");
  }
  console.log("capitalizedWords: ", capitalizedWords);
  return capitalizedWords;
};

const sampleInput = {
  input1: "hello world",
  input2: "javaScript is FUN",
  input3: " multiple   spaces  ",
  input4: "",
};

Object.keys(sampleInput).map((k) => {
  return { [`${k} - ${sampleInput[k]}`]: capitalizeWords(sampleInput[k]) };
});
