/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = []
    arr.forEach((item, index) => {
        returnedArray[index] = fn(item, index)
    })
    return returnedArray
};