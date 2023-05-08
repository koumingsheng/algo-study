// 3. 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0, map = new Map(), max = 0

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      left = Math.max(left, map.get(s[i]) + 1)
    }
    map.set(s[i], i)
    max = Math.max(max, i - left + 1)
  }
  return max
};