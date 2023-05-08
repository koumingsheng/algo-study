import { swap, generateRandomArray } from "./Utils.js";

function insert_sort(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j - 1 >= 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1)
      }
    }
  }
}


const nums = generateRandomArray(100000)
const start = Date.now()
insert_sort(nums)
const end = Date.now()
const time = (end - start) / 1000 + 's'
console.log(time)