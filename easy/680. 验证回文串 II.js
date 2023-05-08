/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0, j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      return helper(s, i + 1, j) || helper(s, i, j - 1)
    } else {
      i++
      j--
    }
  }
  return true
};

function helper(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    } else {
      i++
      j--
    }
  }
  return true
}