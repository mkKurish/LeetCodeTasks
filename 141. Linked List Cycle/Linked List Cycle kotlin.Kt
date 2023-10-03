/*
Runtime
218 ms
Beats
7.66%
Memory
39.4 MB
Beats
6.18%
*/
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class Solution {
    fun hasCycle(head: ListNode?): Boolean {
        var curr = head
        val m = hashSetOf<ListNode>()
        while (curr != null){
            if (m.contains(curr))
                return true
            else
                m.add(curr)
            curr = curr.next
        }
        return false
    }
}

/*
Runtime
191 ms
Beats
45.26%
Memory
37.3 MB
Beats
72.15%
*/
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class Solution {
    fun hasCycle(head: ListNode?): Boolean {
        if (head == null) return false
        var slow = head
        var fast = head.next?.next
        while (fast != null && fast != slow) {
            slow = slow?.next
            fast = fast.next?.next
        }
        return fast != null
    }
}