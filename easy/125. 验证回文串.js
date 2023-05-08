// 125. 验证回文串
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const list = []
  for (const c of s) {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
      list.push(c.toLowerCase())
    }
  }

  let i = 0, j = list.length - 1
  while (i < j) {
    if (list[i] !== list[j]) return false
    i++
    j--
  }

  return true
};