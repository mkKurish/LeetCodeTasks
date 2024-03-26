/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let s = nums[0]
    let f = nums[0]
    do {
        s = nums[s]
        f = nums[nums[f]]
    } while (s != f)
    p1 = nums[0]
    p2 = s
    while (p1 != p2) {
        p1 = nums[p1]
        p2 = nums[p2]
    }
    return p1
};