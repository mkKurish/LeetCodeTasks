/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++){
        const pos = Math.abs(nums[i]) - 1
        if (nums[pos] < 0){
            result.push(pos + 1)
        }
        nums[pos] = -nums[pos]
    }
    return result
};