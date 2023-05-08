// 414. 第三大的数
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let a = null, b = null, c = null
    for (const num of nums) {
        if (a === null || num > a) {
            c = b
            b = a
            a = num
        } else if (a > num && (b === null || num > b)) {
            c = b
            b = num
        } else if (b > num && (c === null || num > c)) {
            c = num
        }
    }

    return c === null ? a : c
};