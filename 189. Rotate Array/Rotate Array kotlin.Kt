/*
Runtime
324 ms
Beats
54.84%
Memory
51.9 MB
Beats
20.57%
*/
class Solution {
    fun containsDivisor (a: Int, b: Int): Boolean{
        for (i in 2..b){
            if (b % i == 0 && a % i == 0)
                return true
        }
        return false
    }

    fun rotate(nums: IntArray, inputK: Int): Unit {
        val k = inputK % nums.size
        if (k != 1 && containsDivisor(nums.size, k)) {
            rotate(nums, 1)
            rotate(nums, k - 1)
        }else {
            var temp = 0
            var last = nums[0]
            var i = k
            while (i != 0) {
                temp = nums[i]
                nums[i] = last
                last = temp
                i = (i + k) % nums.size
            }
            nums[i] = last
        }
    }
}