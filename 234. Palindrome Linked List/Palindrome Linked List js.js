/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head
    let prev = null
    while(fast != null && fast.next != null){
        fast = fast.next.next
        const temp = prev
        prev = slow
        slow = slow.next
        prev.next = temp
    }
    if (fast != null && fast.next == null) slow = slow.next
    while (prev != null && slow != null){
        if (prev.val != slow.val) return false
        prev = prev.next
        slow = slow.next
    }
    return true
};