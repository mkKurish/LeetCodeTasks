/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {}
    arr1.forEach(pair => {
        result[pair.id] = pair
    })
    arr2.forEach(pair => {
        if (result[pair.id]){
            Object.keys(pair).forEach(key => {
                result[pair.id][key] = pair[key]
            })
        } else {
            result[pair.id] = pair
        }
    })
    return Object.values(result)
};