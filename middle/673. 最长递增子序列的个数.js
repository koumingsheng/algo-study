// 673. 最长递增子序列的个数
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const len = nums.length
  const dp = new Array(len).fill(1), cnt = new Array(len).fill(1)

  let max = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          cnt[i] = cnt[j]
          max = Math.max(max, dp[i])
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j]
        }
      }
    }
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    if (dp[i] === max) {
      ans += cnt[i]
    }
  }

  return ans
};