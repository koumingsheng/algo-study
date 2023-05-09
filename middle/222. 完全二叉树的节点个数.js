// 222. 完全二叉树的节点个数
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
var countNodes = function (root) {
  if(root === null) return 0

  const left = level(root.left)
  const right = level(root.right)

  if (left === right) {
    return (1 << left) + countNodes(root.right)
  } else {
    return (1 << right) + countNodes(root.left)
  }
};

function level(node) {
  let h = 0
  while (node) {
    h++
    node = node.left
  }
  return h
}