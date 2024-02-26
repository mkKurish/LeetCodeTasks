/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let called = undefined
    return function (...args) {
        if (called !== undefined) {
            clearTimeout(called)
            called = undefined
        }
        called = setTimeout(() => {
            fn(...args)
            called = undefined
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */