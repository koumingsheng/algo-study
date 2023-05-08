// 151. 反转字符串中的单词
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const len = s.length

  let list = [], word = ''
  for (let i = 0; i < len; i++) {
    if (s[i] !== ' ') {
      word += s[i]
    } else {
      if (word) {
        list.unshift(word)
        word = ''
      }
    }
  }

  if (word) {
    list.unshift(word)
  }
  
  return list.join(' ')
};