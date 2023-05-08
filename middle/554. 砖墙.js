// 554. 砖墙
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const n = wall.length, map = new Map()

  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j]
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }

  let max = 0
  for (let val of map.values()) max = Math.max(max, val)
  return n - max
};