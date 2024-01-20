/*
Runtime
57
ms
Beats
70.37%
of users with JavaScript
Memory
52.66
MB
Beats
5.02%
of users with JavaScript
 */
var majorityElement = function(nums) {
    nums.sort()
    return nums[Math.round(nums.length/2) - 1] 
};