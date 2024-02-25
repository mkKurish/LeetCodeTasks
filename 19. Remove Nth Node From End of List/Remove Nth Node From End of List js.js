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
var removeNthFromEnd = function(head, n) {
    let preNthNode = head
    let i = n
    let curr = head
    while (i > 0){
        curr = curr.next
        i--
    }
    if (curr == null)
        return head.next
    while (curr && curr.next != null) {
        preNthNode = preNthNode.next
        curr = curr.next
    }
    preNthNode && preNthNode.next && (preNthNode.next = preNthNode.next.next)
    return head
};