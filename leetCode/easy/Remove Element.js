/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Two Pointer
// Instead of creating a new array, you use two indexes (pointers) to work within the same array.

// i → reads every element.
// k → writes the elements you want to keep.

var removeElement = function (nums, val) {
    let k = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== val) {
            nums[k] = nums[index];
            k++;
        }
    }

    return k;
};

const nums = [3, 2, 2, 3], val = 3;
console.log("removeElement: ", removeElement(nums, val));
console.log("nums: ", nums)