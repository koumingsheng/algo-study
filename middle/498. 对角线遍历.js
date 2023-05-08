/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const res = []

  const queen = [], used = {}
  queen.push([0, 0])
  used[[0, 0].toString()] = true
  let isLeft = true

  while (queen.length) {
    const len = queen.length
    const list = []
    for (let i = 0; i < len; i++) {
      const pos = queen.shift()
      const x = pos[0], y = pos[1]
      isLeft ? list.push(mat[x][y]) : list.unshift(mat[x][y])

      if (inArea(mat, x + 1, y) && !used[[x + 1, y].toString()]) {
        queen.push([x + 1, y])
        used[[x + 1, y].toString()] = true
      }
      if (inArea(mat, x, y + 1) && !used[[x, y + 1].toString()]) {
        queen.push([x, y + 1])
        used[[x, y + 1].toString()] = true
      }
    }
    isLeft = !isLeft
    res.push(...list)
  }
  return res
};

function inArea(mat, i, j) {
  return i >= 0 && i < mat.length && j >= 0 && j < mat[0].length
}

