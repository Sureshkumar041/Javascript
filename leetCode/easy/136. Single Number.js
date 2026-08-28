// 136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//     let hash = {}; // Space Complexity = O(n)

//  Time Complexity = O(n)
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]]) {
//             hash[nums[i]]++;
//         } else {
//             hash[nums[i]] = 1
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]] === 1) {
//             return nums[i]
//         }
//     }
// };


// XOR Approach

var singleNumber = function (nums) {
    let xor = 0; // Space Complexity = O(1)

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;
};


console.log("singleNumber: ", singleNumber([4, 1, 2, 1, 2]))