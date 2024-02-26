/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = []
    for (let i = 0; i < arr.length; i++){
        if (i % size == 0){
            result.push([])
        }
        result[(i - i % size)/size].push(arr[i])
    }
    return result
};
