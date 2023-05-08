import { swap, generateRandomArray } from "./Utils.js";

function selectSort(nums) {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    swap(nums, i, minIndex)
  }

  return nums
}

const nums = generateRandomArray(10000)
const start = Date.now()
selectSort(nums)
const end = Date.now()
const time = (end - start) / 1000 + 's'
console.log(time)
