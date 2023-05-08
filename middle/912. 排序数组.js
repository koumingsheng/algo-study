// 912. 排序数组
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  sort(nums, 0, nums.length - 1)
  return nums
};

function sort(nums, l, r) {
  if (l >= r) return

  const mid = (r + l) >>> 1

  sort(nums, l, mid)
  sort(nums, mid + 1, r)

  if (nums[mid] <= nums[mid + 1]) return
  merge(nums, l, mid, r)
}

function merge(nums, l, mid, r) {
  const temp = nums.slice(l, r + 1)

  let i = l, j = mid + 1

  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l]
      j++
    } else if (j > r) {
      nums[k] = temp[i - l]
      i++
    } else if (temp[i - l] < temp[j - l]) {
      nums[k] = temp[i - l]
      i++
    } else {
      nums[k] = temp[j - l]
      j++
    }
  }
}