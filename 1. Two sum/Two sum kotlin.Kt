/*
Runtime
285 ms
Beats
20.86%
Memory
38 MB
Beats
56.78%
*/
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        for (i in 0 until (nums.size - 1)){
            for (j in (i + 1) until nums.size){
                if (nums.get(i) + nums.get(j) == target)
                    return intArrayOf(i, j)
            }
        }
        return intArrayOf(0, 0) // You'll never reach this according to the task
    }
}