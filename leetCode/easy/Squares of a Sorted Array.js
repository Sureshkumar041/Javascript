/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 977. Squares of a Sorted Array
// var sortedSquares = function (nums) {
//     for (let index = 0; index < nums.length; index++) {
//         const element = nums[index];
//         nums[index] = element ** 2;
//     }

//     return nums.sort((a, b) => a - b)
// };

// const nums = [-4, -1, 0, 3, 10];
// sortedSquares(nums);

// console.log("nums: ", nums);


// [-4, -1, 0, 3, 10]
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    const result = new Array(nums.length);

    // 4 > 10
    // 1 > 3
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }

    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));