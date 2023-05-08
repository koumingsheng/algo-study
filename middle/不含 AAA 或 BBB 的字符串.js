// 不含 AAA 或 BBB 的字符串
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  const res = []

  while (a || b) {

    let writeA = false
    if (res.length >= 2 && res[res.length - 1] === res[res.length - 2]) {
      if (res[res.length - 1] === 'b') writeA = true
    } else {
      if (a > b) writeA = true
    }

    if (writeA) {
      res.push('a')
      a--
    } else {
      res.push('b')
      b--
    }
  }

  return res.join('')
};