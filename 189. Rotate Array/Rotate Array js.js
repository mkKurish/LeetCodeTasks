/*
Runtime
87
ms
Beats
38.37%
of users with JavaScript
Memory
56.58
MB
Beats
5.10%
of users with JavaScript
 */
var rotate = function(nums, inpK) {
    const k = inpK % nums.length
    const lastKelems = nums.slice(nums.length - k)
    for (let i = nums.length - 1; i >= k; i--){
        nums[i] = nums[i - k]
    }
    for (let i = 0; i < k; i++){
        nums[i] = lastKelems[i]
    }
};

/*
Runtime
79
ms
Beats
70.48%
of users with JavaScript
Memory
57.39
MB
Beats
5.10%
of users with JavaScript
 */
const containsDivisor = (a, b) => {
    for (let i = 2; i <= b; i++){
        if (b % i === 0 && a % i === 0)
            return true
    }
    return false
}

var rotate = function(nums, k) {
    if (k !== 1 && containsDivisor(nums.length, k)){
        rotate(nums, k - 1)
        rotate(nums, 1)
    } else{
        let i = 0
        let temp1 = nums[i], temp2
        do {
            temp2 = nums[(i + k) % nums.length]
            nums[(i + k) % nums.length] = temp1
            temp1 = temp2
            i = (i + k) % nums.length
        } while (i !== 0)
    }
};

/*
Runtime
80
ms
Beats
66.71%
of users with JavaScript
Memory
57.32
MB
Beats
5.10%
of users with JavaScript
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let res = nums.splice(nums.length-k,k);
    return nums.unshift(...res);
};