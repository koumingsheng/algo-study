// 19. 删除链表的倒数第 N 个结点
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre = new ListNode()
  pre.next = head
  let start = pre, end = pre

  while (n) {
    start = start.next
    n--
  }

  while (start.next) {
    end = end.next
    start = start.next
  }

  end.next = end.next.next
  return pre.next
};