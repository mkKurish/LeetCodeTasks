/*
Runtime
47
ms
Beats
82.58%
of users with JavaScript
Memory
48.90
MB
Beats
5.05%
of users with JavaScript
 */
var lengthOfLastWord = function(inpS) {
    const s = inpS.trim()
    for (let i = s.length - 1; i >= 0; i--){
        if (s.charAt(i) === ' ')
            return s.length - (i + 1)
    }
    return s.length
};