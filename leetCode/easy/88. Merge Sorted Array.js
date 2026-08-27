/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let n1Copy = nums1.slice(0, m);
    let p1 = 0, p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || n1Copy[p1] < nums2[p2]) {
            nums1[i] = n1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }

    return nums1;
};


let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;


console.log("r: ", merge(nums1, m, nums2, n));