/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  const len = nums.length

  let ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < len - 2; i++) {
    let p = i + 1, q = len - 1
    while (p < q) {
      const sum = nums[i] + nums[p] + nums[q]
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }
      if (sum > target) {
        q--
      } else if (sum < target) {
        p++
      } else {
        return sum
      }
    }
  }

  return ans
};