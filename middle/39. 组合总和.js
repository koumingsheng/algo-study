// 39. 组合总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [], len = candidates.length

  const dfs = (path, idx, target) => {
    if (target < 0) return
    if (target === 0) {
      res.push(path.slice())
      return
    }
    for (let i = idx; i < len; i++) {
      path.push(candidates[i])
      dfs(path, i, target - candidates[i])
      path.pop()
    }
  }

  dfs([], 0, target)
  return res
};