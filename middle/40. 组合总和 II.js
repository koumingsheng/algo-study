// 40. 组合总和 II
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const len = candidates.length
  candidates.sort((a, b) => a - b)

  const res = []
  const dfs = (path, target, start) => {
    if (target === 0) {
      res.push(path.slice())
      return
    }

    if (target < 0) {
      return
    }

    for (let i = start; i < len; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue
      path.push(candidates[i])
      dfs(path, target - candidates[i], i + 1)
      path.pop()
    }
  }

  dfs([], target, 0)
  return res
};