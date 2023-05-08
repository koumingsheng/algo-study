// 384. 打乱数组
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.originNums = this.nums.slice()
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.originNums.slice()
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.nums.length
  for (let i = 0; i < len; i++) {
    const j = Math.floor(Math.random() * (len - i)) + i
    const temp = this.nums[i]
    this.nums[i] = this.nums[j]
    this.nums[j] = temp
  }
  return this.nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */