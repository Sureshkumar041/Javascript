function validatePalindrome(str) {
  // Number 0 - 9
  // 48 - 57

  // A-Z
  // 65 - 90

  // a-z
  // 97 - 122

  // Your implementation
  const lowerCaseStr = String(str).toLowerCase();
  let extractStr = "",
    reserveStr = "";
  for (var i = 0; i < lowerCaseStr.length; i++) {
    let asciiValue = String(lowerCaseStr[i]).charCodeAt(),
      isvalid =
        (asciiValue >= 48 && asciiValue <= 57) ||
        (asciiValue >= 97 && asciiValue <= 122);

    extractStr = extractStr + (isvalid ? lowerCaseStr[i] : "");
    reserveStr = (isvalid ? lowerCaseStr[i] : "") + reserveStr;
  }

  console.log("extractStr: ", extractStr);
  console.log("reserveStr: ", reserveStr);

  return extractStr == reserveStr;
}

//For the purpose of user debugging.
const isPalindrome = validatePalindrome("!!!@@@###sds");
console.log(isPalindrome);
