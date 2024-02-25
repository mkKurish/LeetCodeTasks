/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carying = 1
    for (let i = digits.length - 1; i >= 0; i--){
        const cur = digits[i] + carying
        if (cur > 9){
            digits[i] = cur - 10
        } else {
            digits[i] = cur
            carying = 0
            break
        }
    }
    if (carying){
        digits.unshift(1)
    }
    return digits
};