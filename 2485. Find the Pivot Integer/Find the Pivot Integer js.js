/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let allSum = 0
    for (let i = 1; i <= n; i++)
        allSum += i
    let prefSum = 0
    for (let i = 1; i <= n; i++){
        if (prefSum + i == allSum - prefSum)
            return i
        if (prefSum > allSum)
            break;
        prefSum += i
    }
    return -1
}