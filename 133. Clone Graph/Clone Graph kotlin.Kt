/*
Runtime
183
ms
Beats
90.57%
of users with Kotlin
Memory
38.00
MB
Beats
22.13%
of users with Kotlin
*/
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var neighbors: ArrayList<Node?> = ArrayList<Node?>()
 * }
 */

class Solution {
  fun cloneGraph(node: Node?): Node? {
    node ?: return node
    val nodes = Array<Node?>(101) { null }
    fun dfs(node: Node): Node {
      nodes[node.`val`]?.let { return it }
      val copy = Node(node.`val`)
      nodes[node.`val`] = copy
      for (next in node.neighbors) {
        val nextcopy = dfs(next!!)
        copy.neighbors.add(nextcopy)
      }
      return copy
    }
    return dfs(node)
  }
}