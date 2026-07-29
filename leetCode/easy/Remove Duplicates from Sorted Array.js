/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    // Time complexity
    // O(n)

    // let k = 0;
    // for (let index = 0; index < nums.length; index++) {
    //     const isExist = nums.slice(0, index).reverse();
    //     if (!isExist.some((e) => e === nums[index])) {
    //         nums[k] = nums[index];
    //         k++;
    //     }
    // }


    // Space complexity:
    // O(1)


    if (nums.length === 0) return 0;

    let k = 1;

    for (let index = 1; index < nums.length; index++) {
        if (nums[index] !== nums[k - 1]) {
            nums[k] = nums[index];
            k++;
        }
    }


    return k;
};

const nums = [1, 1, 2];
console.log("removeElement: ", removeDuplicates(nums));
console.log("nums: ", nums)