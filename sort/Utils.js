export function generateRandomArray(n, random) {
  const arr = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    arr[i] = Math.trunc(Math.random() * n)
  }
  return arr
}

export function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

// generateRandomArray(100)
// console.table(generateRandomArray(10000))