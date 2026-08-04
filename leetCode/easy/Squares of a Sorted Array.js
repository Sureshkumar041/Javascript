/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 977. Squares of a Sorted Array
var sortedSquares = function (nums) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        nums[index] = element ** 2;
    }

    return nums.sort((a, b) => a - b)
};

const nums = [-4, -1, 0, 3, 10];
sortedSquares(nums);

console.log("nums: ", nums);