// 198. 打家劫舍
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length
  const dp = new Array(len + 1).fill(0)
  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1])
  }
  return dp[len]
};