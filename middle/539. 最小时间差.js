// 539. 最小时间差
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const nums = []
  for (const time of timePoints) {
    nums.push(getNums(time))
  }

  nums.sort((a, b) => a - b)
  const len = nums.length, mod = 60 * 24
  let min = mod
  for (let i = 1; i < len; i++) {
    min = Math.min(min, nums[i] - nums[i - 1])
  }
  min = Math.min(min,mod - nums[len - 1] + nums[0])
  return min
};


function getNums(time) {
  const t = time.split(':')
  return Number(t[0]) * 60 + Number(t[1])
}