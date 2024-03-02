var sortedSquares = function (nums) {
    const nl = nums.length - 1
    let left_index = 0
    let right_index = nl
    let resultArray = {}
    while (left_index <= right_index) {
        if (nums[right_index] - nums[left_index] < nums[right_index] * 2) {
            resultArray[right_index - left_index] = (nums[right_index] * nums[right_index])
            right_index--
        } else {
            resultArray[right_index - left_index] = (nums[left_index] * nums[left_index])
            left_index++
        }
    }
    return Object.values(resultArray)
};