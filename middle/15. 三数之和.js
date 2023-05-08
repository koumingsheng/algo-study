// 15. 三数之和
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  const res = []

  for (let i = 0; i < len - 2; i++) {
    let l = i + 1, r = len - 1
    if (nums[i - 1] === nums[i]) continue
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      } else {
        if (sum > 0) {
          r--
        } else {
          l++
        }
      }
    }
  }
  return res
};