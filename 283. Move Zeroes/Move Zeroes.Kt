/*
Runtime
391 ms
Beats
7.97%
Memory
40.9 MB
Beats
25.70%
 */
class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        for (i in nums.indices){
            if (nums[i] == 0){
                for (j in (i + 1) until nums.size){
                    if (nums[j] != 0){
                        nums[i] = nums[j]
                        nums[j] = 0
                        break
                    }
                }
            }
        }
    }
}

/*
Runtime
308 ms
Beats
32.28%
Memory
40.1 MB
Beats
68.35%
 */
class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        val newIndsToValues: MutableMap<Int, Int> = mutableMapOf()
        var ind = 0;
        var zerosCount = 0;
        for (i in nums.indices) if (nums[i] != 0) newIndsToValues.put(ind++,  nums[i]) else zerosCount++
        for ((i, v) in newIndsToValues) nums[i] = v
        for (i in (nums.size - 1) downTo (nums.size - zerosCount)) nums[i] = 0
    }
}

/*
Runtime
294 ms
Beats
46.33%
Memory
40.4 MB
Beats
58.73%
 */
class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        val newIndsToValues: MutableMap<Int, Int> = mutableMapOf()
        var ind = 0;
        for (i in nums.indices) if (nums[i] != 0) newIndsToValues.put(ind++,  nums[i])
        for (i in nums.indices) nums[i] = newIndsToValues.get(i) ?: 0
    }
}