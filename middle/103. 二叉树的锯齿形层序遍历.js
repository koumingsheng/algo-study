// 103. 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = []
  if (root === null) return res
  let isLeft = true
  const queen = []
  queen.push(root)
  while (queen.length) {
    const len = queen.length
    const arr = []
    for (let i = 0; i < len; i++) {
      const node = queen.shift()
      isLeft ? arr.push(node.val) : arr.unshift(node.val)
      if (node.left) queen.push(node.left)
      if (node.right) queen.push(node.right)
    }
    isLeft = !isLeft
    res.push(arr)
  }
  return res
};