/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (!Array.isArray(arr)){
        return [arr]
    }
    if (n > 0){
        const res = []
        arr.forEach(el => {
            const elements = [...flat(el, n - 1)]
            elements.forEach(i => res.push(i))
        })
        return res
    } else {
        return arr
    } 
};