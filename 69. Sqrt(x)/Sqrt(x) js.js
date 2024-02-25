/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 0
    var r = x
    while (l <= r){
        const mid = Math.floor((l + r) / 2)
        if (mid * mid <= x && x < (mid + 1) * (mid + 1)){
            return mid
        }else if (mid * mid < x){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    return -1
};