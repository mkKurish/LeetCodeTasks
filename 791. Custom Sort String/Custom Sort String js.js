/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const orderedLetters = Array(order.length).fill(0)
    const otherLetters = []
    for (let c of s){
        if (order.includes(c))
            orderedLetters[order.indexOf(c)]++
        else
            otherLetters.push(c)
    }
    let result = otherLetters.join('');
    for (let i = 0; i < order.length; i++){
        result += order[i].repeat(orderedLetters[i])
    }
    return result
}