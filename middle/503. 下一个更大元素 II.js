// 503. 下一个更大元素 II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length, stack = []
  const res = new Array(n).fill(-1)
  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      res[stack.pop()] = nums[i % n]
    }
    stack.push(i % n)
  }
  return res
};