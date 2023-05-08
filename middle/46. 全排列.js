// 46. 全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [], used = {}

  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }

    for (const num of nums) {
      if (used[num]) continue
      used[num] = true
      path.push(num)
      dfs(path)
      console.log(path)
      path.pop()
      used[num] = false
    }
  }

  dfs([])
  return res
};


[ 1, 2, 3 ]
[ 1, 2 ]
[ 1, 3, 2 ]
[ 1, 3 ]
[ 1 ]
[ 2, 1, 3 ]
[ 2, 1 ]
[ 2, 3, 1 ]
[ 2, 3 ]
[ 2 ]
[ 3, 1, 2 ]
[ 3, 1 ]
[ 3, 2, 1 ]
[ 3, 2 ]
[ 3 ]



[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 3 ]
[ 1, 3, 2 ]
[ 2 ]
[ 2, 1 ]
[ 2, 1, 3 ]
[ 2, 3 ]
[ 2, 3, 1 ]
[ 3 ]
[ 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2 ]
[ 3, 2, 1 ]
