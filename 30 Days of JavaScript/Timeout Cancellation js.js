/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => fn(...args), t)
    const cancelFn = () => clearTimeout(timer)
    return cancelFn
};