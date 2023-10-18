/*
Runtime
164 ms
Beats
92.5%
Memory
36.2 MB
Beats
92.5%
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
    fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
        var curGroupHeader: ListNode? = head
        var input = head
        while (true){
            if (input == null)
                break
            curGroupHeader = ListNode(input.`val`)
            curGroupHeader.next = input.next
            var nextGroupHeader: ListNode? = ListNode(curGroupHeader.`val`)
            nextGroupHeader!!.next = curGroupHeader.next
            var i = 0
            while(nextGroupHeader != null && i < k){
                nextGroupHeader = nextGroupHeader.next
                i++
            }
            if (i < k)
                break
            var temp = curGroupHeader.next
            curGroupHeader.next = nextGroupHeader
            while(i > 1){
                val temp2 = temp?.let { ListNode(it.`val`) }
                temp2!!.next = temp!!.next
                temp.next = curGroupHeader
                curGroupHeader = temp
                temp = temp2.next
                i--
            }
            input.`val` = curGroupHeader!!.`val`
            input.next = curGroupHeader.next
            input = temp
        }
        return head
    }
}