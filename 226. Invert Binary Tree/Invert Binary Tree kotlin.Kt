/*
Runtime
136 ms
Beats
63.78%
Memory
33.7 MB
Beats
69.23%
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
    fun invertTree(root: TreeNode?): TreeNode? {
        if (root == null)
            return root
        val temp = invertTree(root.left)
        root.left = invertTree(root.right)
        root.right = temp
        return root
    }
}