/*
Runtime
170
ms
Beats
35.59%
of users with Kotlin
Memory
35.53
MB
Beats
65.49%
of users with Kotlin
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
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        var result: ListNode? = null
        var head: ListNode? = null
        var l1 = list1
        var l2 = list2
        while(l1 != null && l2 != null){
            if (l1.`val` > l2.`val`){
                val temp = l2
                l2 = l2?.next
                temp.next = null
                if (result == null){
                    result = temp
                    head = result
                }else{
                    result.next = temp
                    result = temp
                }
            }else{
                val temp = l1
                l1 = l1?.next
                temp.next = null
                if (result == null){
                    result = temp
                    head = result
                }else{
                    result.next = temp
                    result = temp
                }
            }
        }
        if (l1 == null){
            if (result == null)
                return l2
            else
                result.next = l2
        }
        else{
            if (result == null)
                return l1
            else
                result.next = l1
        }
        return head
    }
}