/*
Runtime
165 ms
Beats
79.60%
Memory
37.6 MB
Beats
9.3%
*/
class Solution {
    fun hasPathSum(root: TreeNode?, targetSum: Int): Boolean {
        if (root == null)
            return false
        if (root.left == root.right && root.left == null)
            return root.`val` == targetSum
        return (hasPathSum(root.left, targetSum - root.`val`)
            || hasPathSum(root.right, targetSum - root.`val`))
    }
}


// NOT-RECURSIVE METHOD
// does not work with unbalanced trees

class Solution {
    fun hasPathSum(root: TreeNode?, targetSum: Int): Boolean {
        val arr = mutableListOf(root)
        var i = 0
        var allNodesInLayerIsNull = false
        while (i < arr.size) {
            if (isSummedTwoPow(i)) {
                if (allNodesInLayerIsNull)
                    break
                allNodesInLayerIsNull = true
            }
            arr += mutableListOf(arr[i]?.left, arr[i]?.right)
            if (arr[i]?.left != null || arr[i]?.right != null)
                allNodesInLayerIsNull = false
            i += 1
        }
        var temp: Int
        var currTarget: Int
        for (z in arr.indices) {
            temp = z
            if (arr[temp] == null)
                continue
            if ((temp + 1) * 2 < arr.size)
                if (arr[(temp + 1) * 2 - 1] != null
                    || arr[(temp + 1) * 2] != null
                )
                    continue
            currTarget = targetSum
            while (temp / 2 < temp) {
                currTarget -= arr[temp]?.`val` ?: 0
                temp = (temp - 1) / 2
            }
            if (arr[temp]?.`val` == currTarget)
                return true
        }
        return false
    }

    fun isSummedTwoPow(x: Int): Boolean{
        var t = 0
        var checksum = 0
        while (checksum < x) {
            checksum += 2.pow(t)
            t++
        }
        return checksum == x
    }

    fun Int.pow(p: Int): Int{
        var res = 1
        for (i in 0..<p){
            res *= this
        }
        return res
    }
}