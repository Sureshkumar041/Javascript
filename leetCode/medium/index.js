/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    for (let index = 0; index < k; index++) {
        const moveIndex = ((index + k) < nums.length ? index + k : (index + k) % nums.length) + 1;

        console.log("moveIndex: ", moveIndex)
        const firstEle = nums[index], lastEle = nums[moveIndex];
        nums[index] = lastEle;
        nums[moveIndex] = firstEle;
    }

};

const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
rotate(nums, k);

console.log("nums: ", nums)