// 611. 有效三角形的个数
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length

  let ans = 0
  for (let i = len - 1; i >= 2; i--) {
    let l = 0, r = i - 1
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        ans += r - l
        r--
      } else {
        l++
      }
    }
  }
  return ans
};