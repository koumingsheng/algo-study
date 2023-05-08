// 106. 从中序与后序遍历序列构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const map = {}, len = inorder.length
  for (let i = 0; i < len; i++) map[inorder[i]] = i

  const dfs = (i_start, i_end, p_start, p_end) => {
    if (i_start > i_end || p_start > p_end) return null
    const mid = map[postorder[p_end]]
    const root = new TreeNode(inorder[mid])
    const left_count = mid - i_start
    root.left = dfs(i_start, mid - 1, p_start, p_start + left_count - 1)
    root.right = dfs(mid + 1, i_end, p_start + left_count, p_end - 1)
    return root
  }

  return dfs(0, inorder.length - 1, 0, postorder.length - 1)
};