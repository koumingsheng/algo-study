// 206. 反转链表
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
var reverseList = function (head) {
  let pre = null, cur = head
  while (cur) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
};  

var reverseList = function (head) {
  if(head === null || head.next === null) return head

  const rev = reverseList(head.next)
  head.next.next = head
  head.next = null
  return rev
};  