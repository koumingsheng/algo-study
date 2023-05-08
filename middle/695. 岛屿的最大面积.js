// 695. 岛屿的最大面积
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length, n = grid[0].length

  let max = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j))
      }
    }
  }
  return max
};

function dfs(grid, i, j) {
  if (!inArea(grid, i, j)) return 0

  if (grid[i][j] === 0 || grid[i][j] === 2) return 0

  if (grid[i][j] === 1) grid[i][j] = 2

  return dfs(grid, i - 1, j) + dfs(grid, i, j - 1) + dfs(grid, i + 1, j) + dfs(grid, i, j + 1) + 1
}

function inArea(grid, i, j) {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length
}