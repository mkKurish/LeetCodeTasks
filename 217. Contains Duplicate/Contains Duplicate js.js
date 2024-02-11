var containsDuplicate = function(nums) {
    const remembered = new Set()
    for (let num of nums){
        if (remembered.has(num))
            return true
        remembered.add(num)
    }
    return false
};

// analog
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};