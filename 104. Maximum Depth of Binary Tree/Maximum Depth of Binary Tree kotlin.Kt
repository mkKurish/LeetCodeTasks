/*
Runtime
177 ms
Beats
31.83%
Memory
36.6 MB
Beats
71.43%
*/
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun maxDepth(root: TreeNode?) = depth(root, 0)

    fun depth(root: TreeNode?, preDepth: Int): Int {
        if (root == null)
            return preDepth
        return max(depth(root.left, preDepth + 1), depth(root.right, preDepth + 1))
    }
}