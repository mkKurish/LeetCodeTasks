/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = []
    nums1.forEach(e => {
        if (nums2.includes(e) && !res.includes(e))
            res.push(e)
    })
    return res
}