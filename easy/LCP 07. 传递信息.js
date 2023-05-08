// LCP 07. 传递信息

/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  const arr = new Array(n).fill(0).map(() => new Array())

  for (let i = 0; i < relation.length; i++) {
    arr[relation[i][0]].push(relation[i][1])
  }

  let cnt = 0
  const dfs = (index, step) => {
    if (step === k) {
      if (index === n - 1) {
        cnt++
      }
      return
    }


    const list = arr[index]
    for (let i = 0; i < list.length; i++) {
      dfs(list[i], step + 1)
    }
  }

  dfs(0, 0)
  return cnt
};