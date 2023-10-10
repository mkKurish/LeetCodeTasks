/*
Runtime
239 ms
Beats
10.38%
Memory
39.4 MB
Beats
81.60%
*/
class Solution {
    fun countNodes(root: TreeNode?): Int {
        if (root == null)
            return 0
        if (root.left == null && root.right == null)
            return 1
        var height = 0
        var temp = root
        while (temp != null) {
            temp = temp.left
            height++
        }
        val turns = BooleanArray(height - 1)
        var minHeight = 0
        while (true) {
            minHeight = 1
            temp = root
            while (temp != null && minHeight < height) {
                temp = if (turns[turns.size - minHeight])
                    temp.left
                else
                    temp.right
                minHeight++
            }
            if (minHeight == height && temp != null)
                break
            increase(turns)
        }
        return 2.summedPow(height) - toActual(turns)
    }

    fun toActual(x: BooleanArray): Int {
        var acc = 0
        for (i in x.indices) {
            acc += if (x[i]) 2.pow(i) else 0
        }
        return acc
    }

    fun Int.pow(p: Int): Int {
        var res = 1
        for (i in 0..<p) {
            res *= this
        }
        return res
    }

    fun Int.summedPow(x: Int): Int {
        var t = 0
        var checksum = 0
        while (t < x) {
            checksum += this.pow(t)
            t++
        }
        return checksum
    }

    fun increase(ba: BooleanArray){
        var i = 0
        while(ba[i]){
            ba[i] = false
            i++
        }
        ba[i] = true
    }
}