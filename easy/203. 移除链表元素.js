// 203. 移除链表元素
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode()
  dummyHead.next = head

  let prev = dummyHead
  while (prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }

  return dummyHead.next
};