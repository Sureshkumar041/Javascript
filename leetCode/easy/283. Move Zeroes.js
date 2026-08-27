// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let insertingInd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertingInd] = nums[i];
            insertingInd++;
        }
    }

    // full remaining ele - zeros
    for (let i = insertingInd; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums;
};

console.log("moveZeroes: ", moveZeroes([0, 1, 0, 3, 12])) // [1,3,12,0,0]