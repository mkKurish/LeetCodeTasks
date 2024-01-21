/*
Runtime
51
ms
Beats
63.74%
of users with JavaScript
Memory
48.60
MB
Beats
5.33%
of users with JavaScript
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ')
    if (words.length != pattern.length)
        return false
    const hm = new Map()
    for (let i = 0; i < words.length; i++){
        if (hm.has(pattern[i])){
            if (hm.get(pattern[i]) !== words[i])
                return false
        } else{
            for(const v of hm.values()){
                if (v === words[i])
                    return false
            }
            hm.set(pattern[i], words[i])
        }
    }
    return true
};