/*
Runtime
186 ms
Beats
97.63%
Memory
39.2 MB
Beats
57.37%
*/
class Solution {
    fun jump(nums: IntArray): Int {
        if (nums.size == 1) return 0
        var jumps = 0
        var curEnd = 0
        var curFarthest = 0
        for (i in nums.indices) {
            curFarthest = maxOf(curFarthest, i + nums[i])
            if (curFarthest >= nums.size - 1) return jumps + 1
            if (i == curEnd) {
                jumps++
                curEnd = curFarthest
            }
        }
        return jumps
    }
}