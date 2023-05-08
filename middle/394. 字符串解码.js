// 394. 字符串解码
// 输入：s = "3[a2[c]]"
// 输出："accaccacc"
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let strStack = [], numStack = []

  let num = 0, str = ''
  for (const c of s) {
    if (c >= '0' && c <= '9') {
      num = num * 10 + Number(c)
    } else if (c === '[') {
      strStack.push(str)
      str = ''
      numStack.push(num)
      num = 0
    } else if (c === ']') {
      str = strStack.pop() + str.repeat(numStack.pop())
    } else {
      str += c
    }
  }

  return str
};