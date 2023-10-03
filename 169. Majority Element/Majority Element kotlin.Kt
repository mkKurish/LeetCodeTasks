/*
Runtime
227 ms
Beats
58.85%
Memory
40.1 MB
Beats
73.26%
*/
class Solution {
    fun majorityElement(nums: IntArray): Int {
        val m = mutableMapOf<Int, Int>()
        for (n in nums){
            m[n] = m.getOrDefault(n, 0) + 1
            if (m.getOrDefault(n, 0) > nums.size / 2)
                return n
        }
        return 0
    }
}