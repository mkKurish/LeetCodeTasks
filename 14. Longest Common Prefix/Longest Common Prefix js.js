/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let cPref = strs.length > 0 ? strs[0] : ""
    strs.forEach((el) => {
        if (el[0] != cPref[0]){
            cPref = ""
            return
        }
        let i
        loop:
        for (i = 0; i < Math.min(cPref.length, el.length); i++){
            if (el[i] != cPref[i])
                break loop
        }
        cPref = cPref.slice(0, i)
    })
    return cPref
};