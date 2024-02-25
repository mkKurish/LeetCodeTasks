/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x == 1)
        return 1
    let result = 1
    let i = Math.abs(n)
    while (i > 0){
        if (i % 2 == 1)
            result *= x
        x *= x
        i = Math.floor(i / 2)
    }
    return n < 0 ? 1 / result : result
};