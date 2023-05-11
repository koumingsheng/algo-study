// 662. 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  const mod = Number.MAX_SAFE_INTEGER
  const queen = []
  queen.push(new TreeNode(1, root.left, root.right))

  let max = 1
  while (queen.length) {
    let len = queen.length, start = -1, end = -1
    for (let i = 0; i < len; i++) {
      const node = queen.shift()
      end = node.val
      if (start === -1) start = node.val
      if (node.left) {
        queen.push(new TreeNode(node.val * 2 % mod, node.left.left, node.left.right))
      }
      if (node.right) {
        queen.push(new TreeNode((node.val * 2 + 1) % mod, node.right.left, node.right.right))
      }
    }
    max = Math.max(max, end - start + 1)
  }
  return max
};