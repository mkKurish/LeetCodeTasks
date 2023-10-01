/*
Runtime
146 ms
Beats
89.1%
Memory
35.2 MB
Beats
43.94%
*/
class Solution {
    fun findMin(nums: IntArray): Int {
        var l = 0
        var lastL = 0
        var r =  nums.size - 1
        var mid = (l + r) / 2
        while (l != r - 1 && l != r){
            if (nums[l] > nums[r]){
                lastL = l
                l = mid
            }else{
                r = mid
                l = lastL
            }
            mid = (l + r) / 2
        }
        return minOf(nums[l], nums[r])
    }
}