class Solution {

    class TreeNode(val value: String, var left: TreeNode? = null, var right: TreeNode? = null) {}

    val op = setOf("+", "-", "*", "/")

    fun treeFromRPN(tokens: MutableList<String>): TreeNode {
        val node = TreeNode(tokens.removeLast())
        if (op.contains(node.value)) {
            node.right = treeFromRPN(tokens)
            node.left = treeFromRPN(tokens)
        }
        return node
    }

    fun evalRPNTree(tree: TreeNode): Int {
        if (!op.contains(tree.value))
            return tree.value.toInt()
        val l = evalRPNTree(tree.left!!)
        val r = evalRPNTree(tree.right!!)
        println("$l n $r")
        return when (tree.value) {
            "+" -> l + r
            "-" -> l - r
            "*" -> l * r
            "/" -> l / r
            else -> 0 // unreachable
        }
    }

    fun evalRPN(tokens: Array<String>): Int {
        val mutableTokens = tokens.toMutableList()
        return evalRPNTree(treeFromRPN(mutableTokens))
    }
}