/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexs = [];

  for (let i = 0; i < nums.length; i++) {
    let newArr = nums?.slice(i + 1);
    console.log("newArr: ", newArr);
    for (let j = 0; j < newArr.length; j++) {
      if (nums?.[i] + newArr?.[j] === target) {
        indexs = [i, j + i];
        break;
      }
    }

    if (indexs.length) break;
  }

  return indexs;
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
