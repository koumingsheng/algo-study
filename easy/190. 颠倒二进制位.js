// 190. 颠倒二进制位
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        res = res * 2 + n % 2
        n >>>= 1
    }
    return res
};