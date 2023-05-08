/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
  const mod = Math.pow(2, 31)
  if (a === -mod && b === -1) return mod - 1

  let negative = 2
  if (a > 0) {
    negative--
    a = -a
  }

  if (b > 0) {
    negative--
    b = -b
  }

  let res = 0
  while (a <= b) {
    let val = b, cnt = 1
    while (a < val + val) {
      cnt += cnt
      val += val
    }
    res += cnt
    a -= val
  }
  return negative === 1 ? -res : res
};