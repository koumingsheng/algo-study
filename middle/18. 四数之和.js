// 18. 四数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const res = [], len = nums.length

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let l = j + 1, r = len - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[l + 1]) l++
          while (l < r && nums[r] === nums[r - 1]) r--
          l++
          r--
        } else if (sum > target) {
          r--
        } else {
          l++
        }
      }
    }
  }
  return res
};