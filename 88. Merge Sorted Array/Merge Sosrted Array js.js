/*
Runtime
49
ms
Beats
78.92%
of users with JavaScript
Memory
49.34
MB
Beats
5.10%
of users with JavaScript
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while (i >= 0 && j >= 0){
        if (nums1[i] > nums2[j])
            nums1[k--] = nums1[i--]
        else
            nums1[k--] = nums2[j--]  
    }
    while (i >= 0)
        nums1[k--] = nums1[i--]
    while (j >= 0)
        nums1[k--] = nums2[j--]
}