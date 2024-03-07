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
var middleNode = function(head) {
    let slow = head
    let fast = head
    let step = false
    while (fast !== null){
        step && (slow = slow.next)
        fast = fast.next
        step = !step
    }
    return slow
};