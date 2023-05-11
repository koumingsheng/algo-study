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
  let max = 1
  const map = new Map(), mod = Number.MAX_SAFE_INTEGER
  const dfs = (node, depth, pos) => {
    if (node === null) return
    if (!map.has(depth)) map.set(depth, pos)
    max = Math.max(max, pos - map.get(depth) + 1)
    dfs(node.left, depth + 1, 2 * pos % mod)
    dfs(node.right, depth + 1, (2 * pos + 1) % mod)
  }
  dfs(root, 0, 1)
  return max
};