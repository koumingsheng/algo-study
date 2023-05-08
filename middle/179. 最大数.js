// 179. 最大数
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    return (b + '' + a) - (a + '' + b)
  })

  let ans = nums.join('')
  return ans.startsWith('0') ? '0' : ans
};