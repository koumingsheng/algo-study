// 34. 在排序数组中查找元素的第一个和最后一个位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0, r = nums.length - 1
  const first = firstPos(nums, l, r, target)
  if (first === -1) return [-1, -1]
  const last = lastPos(nums, l, r, target)
  return [first, last]
};

function firstPos(nums, l, r, target) {
  while (l < r) {
    const mid = (l + r) >>> 1
    if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  if (nums[l] === target) return l
  return -1
}

function lastPos(nums, l, r, target) {
  while (l < r) {
    const mid = (r + l + 1) >>> 1
    if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid
    }
  }
  return l
}
