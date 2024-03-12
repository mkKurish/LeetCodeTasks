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
var removeZeroSumSublists = function(head) {
    if (!head) {
        return head;
    }

    let res = new ListNode(0)
    res.next = head

    let curr = res
    const readNums = new Map()
    let prefSum = 0

    while (curr){
        prefSum += curr.val
        readNums.set(prefSum, curr)
        curr = curr.next
    }

    curr = res
    prefSum = 0
    while (curr){
        prefSum += curr.val
        curr.next = readNums.get(prefSum).next
        curr = curr.next
    }
    return res.next
}