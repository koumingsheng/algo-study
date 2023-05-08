import { generateRandomArray } from "./Utils.js"

function mergeSort(nums) {
  let l = 0, r = nums.length - 1
  sort(nums, l, r)
  return nums
}

function sort(nums, l, r,) {
  if (l >= r) return
  const mid = (r + l) >>> 1
  sort(nums, l, mid)
  sort(nums, mid + 1, r)
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
    } else if (temp[i - l] <= temp[j - l]) {
      nums[k] = temp[i - l]
      i++
    } else {
      nums[k] = temp[j - l]
      j++
    }
  }
}


const nums = generateRandomArray(10000)
mergeSort(nums)
console.table(nums)