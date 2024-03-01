/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let result = ''
    for(let num of s){
        if (num == '1')
            result = '1' + result
        else
            result = result + '0'
    }
    result = result.slice(1) + '1'
    return result
};