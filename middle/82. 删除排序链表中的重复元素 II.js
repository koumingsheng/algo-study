// 82. 删除排序链表中的重复元素 II
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next)
  } else {
    let move = head.next
    while (move && head.val === move.val) {
      move = move.next
    }
    return deleteDuplicates(move)
  }
  return head
};