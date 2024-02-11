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