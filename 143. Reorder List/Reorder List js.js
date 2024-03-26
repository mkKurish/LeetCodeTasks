/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const s = []
    let p = head
    while (p != null){
        s.push(p.val)
        p = p.next
    }
    s.shift()
    let ans = head
    let f = true
    while (s.length > 0){
        const curVal = f ? s.pop() : s.shift()
        ans.next = new ListNode(curVal, null)
        ans = ans.next
        f = !f
    }
};