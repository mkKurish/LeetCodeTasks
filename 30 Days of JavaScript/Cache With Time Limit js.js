var TimeLimitedCache = function () {
    this.pairs = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let existed = false
    if (this.pairs.has(key)) {
        existed = true
        clearTimeout(this.pairs.get(key).timer)
    }
    this.pairs.set(key,
        {
            value,
            timer: setTimeout(() => this.pairs.delete(key), duration)
        })
    return existed
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.pairs.has(key))
        return this.pairs.get(key).value
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.pairs.size
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */