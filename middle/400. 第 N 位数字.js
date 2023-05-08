// 400. 第 N 位数字
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let cur = 1, base = 9
  while (n > cur * base) {
    n -= cur * base
    cur++
    base *= 10
  }
  n--

  const num = Math.pow(10, cur - 1) + Math.floor((n / cur))
  const idx = n % cur
  return Math.floor(num / Math.pow(10, cur - idx - 1)) % 10
};