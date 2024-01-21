/*
Runtime
64
ms
Beats
60.68%
of users with JavaScript
Memory
52.48
MB
Beats
6.34%
of users with JavaScript
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0)
        return undefined
    if (nums.length === 1)
        return new TreeNode(nums[0], undefined, undefined)
    const mid = Math.floor(nums.length / 2)
    return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid + 1)))
};