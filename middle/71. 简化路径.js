// 71. 简化路径
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const nameStack = path.split('/')
  const stack = []

  for (const name of nameStack) {
    if (name === '..') {
      if (stack.length) {
        stack.pop()
      }
    } else if (name && name !== '.') {
      stack.push(name)
    }
  }

  return '/' + stack.join('/')
};