var search = function(nums, target) {
    let [l, r] = [0, nums.length - 1]
    let mid = Math.floor((l + r) / 2)
    while (l <= r){
        if (nums[mid] == target)
            return mid
        if (nums[mid] > target)
            r = mid - 1
        else
            l = mid + 1
        mid = Math.floor((l + r) / 2)
    }
    return -1
};