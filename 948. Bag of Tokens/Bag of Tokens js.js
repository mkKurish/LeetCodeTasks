/*
Runtime
Beats
100.00%
of users with JavaScript
Memory
Beats
14.29%
of users with JavaScript
*/

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {

    const sTokens = quickSort(tokens)      // sorted array of tokens
    let [l, r] = [0, sTokens.length - 1]   // two pointers
    let score = 0                          // our score

    while (l <= r){
        if (power >= sTokens[l]){ // if you can get a point, do it
            score++
            power -= sTokens[l]
            l++
        } else { // otherwise, sell the point at the highest price
            // BUT if l == r and you sell a point,
            // you won't be able to buy anything on power,
            // so just don't do anything and FINISH
            //
            // if you have ZERO points,
            // FINISH is the only option also
            if (!!score && l != r) {
                score--
                power += sTokens[r]
                r--
            } else {
                return score
            }
        }
    }
    return score
}

function quickSort(array) {
    if (array.length <= 1)
        return array
    const arrLen = array.length
    const [l, m, r] = [array[0], array[Math.floor(arrLen / 2)], array[arrLen]]
    let avg
    if (l < m) {
        if (m < r)
            avg = Math.floor(arrLen / 2) // ind of m
        else {
            if (l < r)
                avg = arrLen // ind of r
            else
                avg = 0 // ind of l
        }
    } else {
        if (l < r)
            avg = 0 // ind of l
        else {
            if (m < r)
                avg = arrLen // ind of r
            else 
                avg = Math.floor(arrLen / 2) // ind of m
        }
    }
    // sorting by avg (median) element:
    const newArr = []
    let leftPartCount = 0
    for (let i = 0; i < arrLen; i++){
        if (array[i] <= array[avg]){
            newArr.unshift(array[i])
            leftPartCount++
        }
        else
            newArr.push(array[i])
    }
    if (leftPartCount == newArr.length)
        return newArr
    return quickSort(newArr.splice(0, leftPartCount)).concat(quickSort(newArr)) 
}