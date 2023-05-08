// 93. 复原 IP 地址
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [], len = s.length

  const dfs = (path, idx) => {
    if (path.length === 4 && idx === len) {
      res.push(path.slice().join('.'))
      return
    }

    for (let i = 1; i <= 3; i++) {
      if (idx >= len) return

      const str = s.substring(idx, idx + i)
      if ((str - '0') > 255) return
      if (i !== 1 && str[0] === '0') return

      path.push(str)
      dfs(path, idx + i)
      path.pop()
    }
  }

  dfs([], 0)
  return res
};