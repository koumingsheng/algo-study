// 48. 旋转图像
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  let pos1 = 0, pos2 = n - 1

  while (pos1 < pos2) {
    let add = 0
    while (add < pos2 - pos1) {
      const temp = matrix[pos1][pos1 + add]
      matrix[pos1][pos1 + add] = matrix[pos2 - add][pos1]
      matrix[pos2 - add][pos1] = matrix[pos2][pos2 - add]
      matrix[pos2][pos2 - add] = matrix[pos1 + add][pos2]
      matrix[pos1 + add][pos2] = temp
      add++
    }
    pos1++
    pos2--
  }
  return matrix
};