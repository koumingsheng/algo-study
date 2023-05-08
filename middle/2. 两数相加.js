/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode()
  let pre = dummy, carry = 0
  while (l1 || l2) {
    let v1 = 0, v2 = 0
    if (l1) {
      v1 = l1.val
      l1 = l1.next
    }

    if (l2) {
      v2 = l2.val
      l2 = l2.next
    }

    const sum = v1 + v2 + carry
    pre.next = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    pre = pre.next
  }

  let temp = l1 === null ? l2 : l1
  while (temp) {
    const sum = temp.val + carry
    pre.next = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    pre = pre.next
  }

  if (carry) {
    pre.next = new ListNode(carry)
  }

  return dummy.next
};