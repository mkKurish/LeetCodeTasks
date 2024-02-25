/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let fivesCount = 0;
    for (let i = 1; i <= n; i++){
        let cur = i
        while (cur % 5 == 0){
            fivesCount++;
            cur /= 5
        }
    }
    return fivesCount
};