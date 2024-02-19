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
var reverseList = function(head) {
    if (head == null)
        return null
    let prev = new ListNode(head.val)
    let cur = null
    cur = head.next
    while (cur != null){
        const future = cur.next
        cur.next = prev
        prev = cur
        cur = future
    }
    return prev
};