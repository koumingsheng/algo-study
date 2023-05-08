// 207. 课程表
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0)
  const map = {}

  for (const p of prerequisites) {
    inDegree[p[0]]++
    if (map[p[1]]) {
      map[p[1]].push([p[0]])
    } else {
      map[p[1]] = [p[0]]
    }
  }

  const queen = []
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queen.push(i)
    }
  }

  let cnt = 0
  while (queen.length) {
    cnt++
    const select = queen.shift()
    const toEnd = map[select]
    if (toEnd && toEnd.length) {
      for (const t of toEnd) {
        inDegree[t]--
        if (inDegree[t] === 0) queen.push(t)
      }
    }
  }
  return cnt >= numCourses
};