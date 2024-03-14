var numSubarraysWithSum = function(nums, goal) { // not time-efficient
    let curWindowSum = nums[0]
    let i = 0
    let j = 0
    let countResult = 0
    while (i < nums.length && j < nums.length){
        if (curWindowSum > goal){
            curWindowSum = nums[++i]
            j = i
        }
        else {
            if (curWindowSum == goal){
                countResult++
            }
            curWindowSum += nums[++j]
        }
        if (j == nums.length && i < nums.length){
            i++
            j = i
            curWindowSum = nums[i]
        }
    }
    return countResult
}

var numSubarraysWithSum = function(nums, goal) {
    let i = 0, count = 0, res = 0;
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j] === 1) {
            goal--;
            count = 0;
        }
        
        while (goal === 0 && i <= j) {
            goal += nums[i];
            i++;
            count++;
            if (i > j - goal + 1)
                break;
        }
        
        while (goal < 0) {
            goal += nums[i];
            i++;
        }
        
        res += count;
    }
    return res;
};