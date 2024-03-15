var productExceptSelf = function(nums) {
    let prod = nums.reduce((acc, el) => acc * el, 1)
    const answer = []
    nums.forEach((el, elInd) => {
        if (el != 0)
            answer.push(prod / el)
        else
            answer.push(nums.reduce((acc, item, itemIdx) => {
                if (itemIdx != elInd)
                    return acc * item
                return acc
            }, 1))
    })
    return answer
};

var productExceptSelf = function(nums) {
    const result = Array(nums.length)
    result[0] = 1
    for (let i = 1; i < nums.length; i++){
        result[i] = result[i-1] * nums[i-1]
    }
    const reversed = Array(nums.length)
    reversed[nums.length - 1] = 1
    for (let i = nums.length - 2; i >= 0; i--){
        reversed[i] = reversed[i+1] * nums[i+1]
        result[i] *= reversed[i]
    }
    return result
};