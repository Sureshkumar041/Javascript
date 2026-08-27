// 485. Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0, curCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curCount = curCount + 1; // 2 2 3

        } else {
            maxCount = Math.max(curCount, maxCount)
            curCount = 0 // cc - 0 0
        }
    }

    return maxCount = Math.max(curCount, maxCount);
};


console.log("findMaxConsecutiveOnes: ", findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))