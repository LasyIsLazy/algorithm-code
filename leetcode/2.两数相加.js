/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let a = l1
  let b = l2
  let rest = 0
  const resultNode = {}
  let curNode = resultNode
  while (a || b || rest) {
    curNode = curNode.next || curNode
    let result = (a ? a.val : 0) + (b ? b.val : 0) + rest
    if (result >= 10) {
      curNode.val = result - 10
      rest = 1
    } else {
      curNode.val = result
      rest = 0
    }
    a = a ? a.next : null
    b = b ? b.next : null
    curNode.next = {}
  }
  curNode.next = null
  return resultNode
}
