// 113. 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = []

  const dfs = (path, node, targetSum) => {
    if (node === null) return
    if (node.left === null && node.right === null) {
      if (targetSum === node.val) {
        path.push(node.val)
        res.push(path.slice())
        path.pop()
        return
      }
    }

    path.push(node.val)
    dfs(path, node.left, targetSum - node.val)
    dfs(path, node.right, targetSum - node.val)
    path.pop()
  }
  dfs([], root, targetSum)
  return res
};