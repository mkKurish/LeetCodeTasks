/*
Runtime
Beats
89.47%
Memory
Beats
68.42%
*/

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let [l, r] = [0, s.length - 1]
    let currentLetter = s.charAt(0)
    while (l < r){
        if (s.charAt(l) == s.charAt(r)){
            currentLetter = s.charAt(l)
        } else {
            break
        }
        while (s.charAt(l) == currentLetter)
            l++
        while (s.charAt(r) == currentLetter && l < r)
            r--
        
    }
    return r - l + 1
}