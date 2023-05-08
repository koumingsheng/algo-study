// 429. N 叉树的层序遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  if (root === null) return res

  const queen = []
  queen.push(root)
  while (queen.length) {
    const len = queen.length
    const list = []
    for (let i = 0; i < len; i++) {
      const node = queen.shift()
      list.push(node.val)
      if (node.children) {
        for (const child of node.children) {
          queen.push(child)
        }
      }
    }
    res.push(list)
  }
  return res
};