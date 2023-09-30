/*
Runtime
153 ms
Beats
90.48%
Memory
35.2 MB
Beats
57.10%
*/
class Solution {
    fun merge(nums1: IntArray, m: Int, nums2: IntArray, n: Int): Unit {
        var i = m - 1
        var j = n - 1
        var k = m + n - 1
        while (j >= 0 && i >= 0){
            if (nums1[i] > nums2[j]){
                nums1[k--] = nums1[i--]
            }else{
                nums1[k--] = nums2[j--]
            }
        }
        while (j >= 0)
            nums1[k--] = nums2[j--]
    }
}