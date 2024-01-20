/*
Runtime
48
ms
Beats
82.36%
of users with JavaScript
Memory
48.90
MB
Beats
5.01%
of users with JavaScript
 */
var removeElement = function (nums, val) {
    let leftIndOfVals = nums.length
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            for (let j = i; j < leftIndOfVals - 1; j++)
                nums[j] = nums[j + 1]
            leftIndOfVals--
        }
    }
    return leftIndOfVals
};