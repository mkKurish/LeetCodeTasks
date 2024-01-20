/*
Runtime
40
ms
Beats
99.71%
of users with JavaScript
Memory
49.31
MB
Beats
5.29%
of users with JavaScript
*/
var twoSum = function(nums, target) {
    const hm = {}
    for (let i = 0; i < nums.length; i++){
        if (typeof hm[target - nums[i]] !== 'undefined')
            return [hm[target - nums[i]], i]
        hm[nums[i]] = i
    }
}

/*
Runtime
220
ms
Beats
5.03%
of users with JavaScript
Memory
51.92
MB
Beats
5.29%
of users with JavaScript
*/
var twoSum = function(nums, target) {
    let hm = []
    for (let i = 0; i < nums.length; i++){
        const ansInd = hm.find(ind => target === nums[i] + nums[ind])
        if (typeof ansInd !== 'undefined')
            return [ansInd, i]
        hm.push(i)
    }
}