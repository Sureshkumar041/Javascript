const capitalizeWords = async (str = "") => {
  let capitalizedWords = "",
    splitedWords = String(str)?.split(" ");
  for (let i = 0; splitedWords?.length > i; i++) {
    const word = splitedWords?.[i]?.replaceAll(" ", "");

    if (!word) {
      continue;
    }

    capitalizedWords =
      capitalizedWords +
      word?.at(0)?.toUpperCase() +
      word?.slice(1) +
      (splitedWords?.length !== i + 1 &&
      (splitedWords?.[i + 1]?.replaceAll(" ", "") ||
        splitedWords?.slice(i + 1)?.some((v) => v))
        ? " "
        : "");
  }
  return capitalizedWords;
};
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is fun"));
console.log(capitalizeWords(" multiple   spaces  "));
console.log(capitalizeWords(""));
