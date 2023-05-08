// 443. 压缩字符串
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const len = chars.length

  let j = 0, left = 0
  for (let i = 0; i < len; i++) {
    if (i + 1 === len || chars[i] !== chars[i + 1]) {
      chars[j++] = chars[i]

      let num = i - left + 1
      if (num > 1) {
        let anchor = j
        while (num) {
          chars[j++] = '' + num % 10
          num = Math.trunc(num / 10)
        }
        reverse(chars, anchor, j - 1)
      }

      left = i + 1
    }
  }
  return j
};

function reverse(nums, l, r) {
  while (l < r) {
    const temp = nums[l]
    nums[l] = nums[r]
    nums[r] = temp
    l++
    r--
  }
}