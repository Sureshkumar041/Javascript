function formatList(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return items.join(" and ");

  return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
}

const sampleInput = {
  input0: [],
  input1: ["apple"],
  input2: ["apple", "banana"],
  input3: ["apple", "banana", "cherry"],
  input4: ["one", "two", "three", "four"],
  input5: ["", "two", ""],
};

console.log(
  Object.keys(sampleInput).map((k) => {
    return { [`${k} - ${sampleInput[k]}`]: formatList(sampleInput[k]) };
  })
);
