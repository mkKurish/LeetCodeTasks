/*
Runtime
262 ms
Beats
95.62%
Memory
40.5 MB
Beats
60.42%
*/
class Solution {
    fun canJump(nums: IntArray): Boolean {
        return reachable(nums, nums.size - 1)
    }

    fun reachable(nums: IntArray, ind: Int): Boolean{
        for (i in ind-1 downTo 0){
            if (nums[i] + i >= ind)
                return reachable(nums, i)
        }
        return ind == 0
    }
}