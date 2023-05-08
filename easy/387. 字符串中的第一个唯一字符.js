// 387. 字符串中的第一个唯一字符

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], -1)
    } else {
      map.set(s[i], i)
    }
  }

  let ans = -1
  for (const [_, val] of map.entries()) {
    if (val !== -1) {
      ans = val
      break
    }
  }

  return ans
};