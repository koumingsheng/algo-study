// 剑指 Offer 38. 字符串的排列
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = [], len = s.length
  const map = {}
  const used = {}

  const dfs = (path) => {
    if (path.length === len) {
      const str = path.join('')
      if (!map[str]) {
        map[str] = true
        res.push(path.join(''))
      }
      return
    }

    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(s[i])
      dfs(path)
      path.pop()
      used[i] = false
    }
  }

  dfs([])
  return res
};