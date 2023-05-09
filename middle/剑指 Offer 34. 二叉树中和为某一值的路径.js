// 剑指 Offer 34. 二叉树中和为某一值的路径
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const res = []
  if (root === null) return res

  const dfs = (node, sum, path) => {
    if (node.left === null && node.right === null) {
      sum += node.val
      path.push(node.val)
      if (sum === target) res.push(path.slice())
      path.pop()
      return
    }

    path.push(node.val)
    if (node.left) {
      dfs(node.left, sum + node.val, path)
    }

    if (node.right) {
      dfs(node.right, sum + node.val, path)
    }

    path.pop()
  }

  dfs(root, 0, [])
  return res
};