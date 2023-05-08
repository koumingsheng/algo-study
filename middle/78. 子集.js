// 78. 子集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const len = nums.length

  const dfs = (path, idx) => {
    res.push(path.slice())
    for (let i = idx; i < len; i++) {
      path.push(nums[i])
      dfs(path, i + 1)
      path.pop()
    }
  }

  dfs([], 0)
  return res
};