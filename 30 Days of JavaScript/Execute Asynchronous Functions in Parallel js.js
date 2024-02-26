/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res, rej) => {
        let results = new Array(functions.length)
        let count = 0
        functions.forEach((func, ind) => {
            func()
                .then(data => {
                    results[ind] = data
                    count++
                    if (count === functions.length) res(results)
                })
                .catch(error => rej(error))
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

///////////

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const promArr = []
    functions.forEach(func => {
        promArr.push(func())
    })
    return Promise.all(promArr)
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */