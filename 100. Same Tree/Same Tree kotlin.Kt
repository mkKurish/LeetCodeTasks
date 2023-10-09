/*
Runtime
146 ms
Beats
32.82%
Memory
33.6 MB
Beats
67.69%
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
    fun isSameTree(p: TreeNode?, q: TreeNode?): Boolean {
        if (p == null || q == null){
            return q == p
        }
        if (p.`val` != q.`val`)
            return false
        if (p.left == p.right && p.left == null &&
        q.left == q.right && q.left == null){
            return true
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
}