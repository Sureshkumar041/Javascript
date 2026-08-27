// 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let sumofTotalNum = n * (n + 1) / 2;

    let partialSumNum = 0;
    for (let i = 0; i < n; i++) {
        partialSumNum = partialSumNum + nums[i];
    }

    return sumofTotalNum - partialSumNum;
};

console.log("missingNumber: ", missingNumber([0, 1]))