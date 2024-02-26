/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj == null)
        return null
    if (typeof obj !== 'object')
        return obj
    let newObj
    if (Array.isArray(obj)){
        newObj = []
        for(let k of obj) {
            console.log(k, !!k)
            if (!!k)
                newObj.push(compactObject(k))
        }
    } else {
        newObj = {}
        for(let k in obj) {
            console.log(k, !!obj[k])
            if (!!obj[k])
                newObj[k] = compactObject(obj[k])
        }
    }
    return newObj
};

//////

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    // This for loop deals with when obj is an iterable object
    // Steps 4-5 as described above
    const compacted = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (value) compacted[key] = value;
    }

    return compacted;
};