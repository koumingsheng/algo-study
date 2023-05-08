// 209. 长度最小的子数组
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length

  let sum = 0, min = Number.MAX_VALUE, j = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    while (sum >= target) {
      min = Math.min(min, i - j + 1)
      sum -= nums[j]
      j++
    }
  }
  return min === Number.MAX_VALUE ? 0 : min
};