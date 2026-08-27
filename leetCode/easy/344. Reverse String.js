// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let n = s.length;
    let halflen = Math.floor(n / 2);
    for (let i = 0; i < halflen; i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
};

console.log("r: ", reverseString(["s", "u", "r", "e", "s", "h"]))