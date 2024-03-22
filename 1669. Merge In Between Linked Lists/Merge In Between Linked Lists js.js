/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let pointer1A = list1
    for (let count = 1; count < a; count++) pointer1A = pointer1A.next
    let pointer1B = pointer1A
    for (let count = a; count <= b; count++) pointer1B = pointer1B.next

    let pointerEnd2 = list2
    while (!!pointerEnd2.next) pointerEnd2 = pointerEnd2.next
    
    pointerEnd2.next = pointer1B.next
    pointer1A.next = list2

    return list1
};