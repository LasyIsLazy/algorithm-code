/** 
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let count = 0
  let cur = head
  let pre = head
  while ((cur = cur.next)) {
    if (count >= n) {
      pre = pre.next
    } else {
      count++
    }
  }
  if (count < n) {
    return head.next
  }
  pre.next = pre.next.next
  return head
}

// [1,2,3,4,5]
