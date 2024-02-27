/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || classFunction === null || classFunction === undefined)
        return false
    let deeper = obj
    while(!!deeper.__proto__){
        if (deeper.__proto__ == classFunction.prototype)
            return true
        deeper = deeper.__proto__
    }
    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */