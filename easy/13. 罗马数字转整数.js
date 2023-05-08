// 13. 罗马数字转整数
/**
 * @param {string} s
 * @return {number}
 */

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var romanToInt = function (s) {
  const romans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let sum = 0, len = s.length
  for (let i = 0; i < len - 1; i++) {
    const cur = romans[s[i]]
    const next = romans[s[i + 1]]
    if (cur < next) {
      sum -= cur
    } else {
      sum += cur
    }
  }

  sum += romans[s[len - 1]]
  return sum
};