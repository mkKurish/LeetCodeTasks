var twoSum = function(numbers, target) {
    let [l, r] = [0, numbers.length - 1]
    while (l < r){
        if (numbers[l] + numbers[r] == target)
            return [l + 1, r + 1]
        else if (numbers[l] + numbers[r] > target)
            r--
        else
            l++
    }
    return undefined
};