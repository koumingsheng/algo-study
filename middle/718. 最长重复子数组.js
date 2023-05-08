// 718. 最长重复子数组
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const n1 = nums1.length, n2 = nums2.length
  const dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0))

  let max = 0
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      max = Math.max(max, dp[i][j])
    }
  }
  return max
};