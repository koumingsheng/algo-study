// 227. 基本计算器 II
// 输入：s = "3+2*2"
// 输出：7
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim()
  const stack = [], len = s.length

  let num = 0, preSign = '+'
  for (let i = 0; i < len; i++) {
    const c = s[i]
    if (c === ' ') continue

    if (isNum(c)) {
      num = num * 10 + (c - '0')
    }

    if (!isNum(c) || i === len - 1) {
      if (preSign === '+') {
        stack.push(num)
      } else if (preSign === '-') {
        stack.push(-num)
      } else if (preSign === '*') {
        stack.push(stack.pop() * num)
      } else if (preSign === '/') {
        console.log(stack)
        stack.push(Math.trunc(stack.pop() / num))
      }
      preSign = c
      num = 0
    }
  }

  let sum = 0
  for (const n of stack) sum += n
  return sum
};

function isNum(n) {
  return n >= '0' && n <= '9'
}