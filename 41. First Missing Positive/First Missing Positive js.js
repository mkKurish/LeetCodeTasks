/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let one = false
    for (let num of nums) if (num == 1) one = true
    if (!one) return 1
    
    const l = nums.length
    for (let i = 0; i < l; i++) {
        if (nums[i] <= 0 || nums[i] > l){
            nums[i] = 1
        }
    }

    for (let i = 0; i < l; i++) {
        const idx = Math.abs(nums[i]) - 1
        nums[idx] = -Math.abs(nums[idx])
    }

    for (let i = 0; i < l; i++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }

    return l + 1
};