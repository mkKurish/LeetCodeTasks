/*
Runtime
152 ms
Beats
73.79%
Memory
35 MB
Beats
19.90%
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
    fun isSymmetric(root: TreeNode?): Boolean {
        if (root == null)
            return true
        return equalsRoots(root.left, root.right)
    }
    fun equalsRoots(r1: TreeNode?, r2: TreeNode?): Boolean{
        if (r1 == null || r2 == null)
            return r1 == r2
        if (r1.`val` != r2.`val`)
            return false
        return equalsRoots(r1.left, r2.right) && equalsRoots(r1.right, r2.left)
    }
}