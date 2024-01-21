/*
Runtime
64
ms
Beats
72.70%
of users with JavaScript
Memory
57.60
MB
Beats
5.04%
of users with JavaScript
 */
var maxArea = function(height) {
    let lft = 0, rgt = height.length - 1, maxArea = 0
    while (lft < rgt){
        if (height[lft] < height[rgt]){
            const area = height[lft] * (rgt - lft)
            maxArea = Math.max(maxArea, area)
            lft++
        }else{
            const area = height[rgt] * (rgt - lft)
            maxArea = Math.max(maxArea, area)
            rgt--
        }
    }
    return maxArea
}