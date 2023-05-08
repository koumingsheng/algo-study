// 56. 合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const len = intervals.length
  const res = new Array(len).fill(0).map(() => new Array(2).fill(0))
  let idx = -1
  for (let i = 0; i < len; i++) {
    if (idx < 0 || intervals[i][0] > res[idx][1]) {
      res[++idx] = intervals[i]
    } else {
      res[idx][1] = Math.max(res[idx][1], intervals[i][1])
    }
  }
  return res.slice(0, idx + 1)
};