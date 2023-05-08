// 17. 电话号码的字母组合
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return []

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const list = []
  for (const d of digits) {
    list.push(map[d])
  }

  const res = []
  const len = list.length
  const dfs = (idx, path) => {
    if (idx === len) {
      res.push(path.slice().join(''))
      return
    }

    const str = list[idx]
    for (let i = 0; i < str.length; i++) {
      path.push(str[i])
      dfs(idx + 1, path)
      path.pop()
    }
  }

  dfs(0, [])

  return res
};