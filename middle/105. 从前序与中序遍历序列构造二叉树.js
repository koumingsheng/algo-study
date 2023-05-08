// 105. 从前序与中序遍历序列构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) map.set(inorder[i], i)

  const dfs = (p_start, p_end, i_start) => {
    if (p_start > p_end) return null
    const mid = map.get(preorder[p_start])
    const node = new TreeNode(inorder[mid])
    const leftNums = mid - i_start
    node.left = dfs(p_start + 1, p_start + leftNums, i_start)
    node.right = dfs(p_start + leftNums + 1, p_end, i_start + leftNums + 1)
    return node
  }

  return dfs(0, preorder.length - 1, 0)
};