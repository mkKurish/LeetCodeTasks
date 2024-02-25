/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2){
        return s.length
    }
    const mapOfChars = new Map() // char -> index
    let lastNonRepeating = 0
    let maxString = 0
    let i = 0
    for(; i < s.length; i++){
        if (mapOfChars.has(s[i])){
            lastNonRepeating = Math.max(lastNonRepeating, mapOfChars.get(s[i]) + 1)
        }
        maxString = Math.max(maxString, i - lastNonRepeating)
        mapOfChars.set(s[i], i)
    }
    return maxString + 1
};