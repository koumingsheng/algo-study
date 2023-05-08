// 剑指 Offer 48. 最长不含重复字符的子字符串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map()

  let max = 0, j = -1
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i]))
    }
    map.set(s[i], i)
    max = Math.max(max, i - j)
  }
  return max
};