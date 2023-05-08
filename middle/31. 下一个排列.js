// 31. 下一个排列
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length
  let i = len - 2, j = len - 1, k = len - 1

  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }

  if (i >= 0) {
    while (nums[i] >= nums[k]) {
      k--
    }
    swap(nums, i, k)
  }

  for (let m = j, n = len - 1; m < n; m++, n--) {
    swap(nums, m, n)
  }
  return nums
};

function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}