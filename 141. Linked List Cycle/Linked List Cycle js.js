/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) return false
    let slow = head
    let fast = head.next != null ? head.next.next : null
    while (slow != fast && fast != null){
        slow = slow != null ? slow.next : null
        fast = fast.next != null ? fast.next.next : null 
    }
    return fast != null
};

//////////

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const nodeSet = new Set()
    let curr = head
    while (curr != null && !nodeSet.has(curr)){
        nodeSet.add(curr)
        curr = curr.next
    }
    return curr != null
};