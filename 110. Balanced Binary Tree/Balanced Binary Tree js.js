function depth(root){
    if (root == null)
        return 0
    return 1 + Math.max(depth(root.left), depth(root.right))
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null)
        return true
    if (Math.abs(depth(root.right) - depth(root.left)) <= 1)
        return isBalanced(root.left) && isBalanced(root.right)
    return false
};