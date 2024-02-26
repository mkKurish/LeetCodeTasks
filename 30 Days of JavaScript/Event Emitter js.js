class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.hasOwnProperty(eventName))
            this[eventName] = {callbacks: [], currCount: 0}
        const cc = this[eventName].currCount
        this[eventName].callbacks.push({func: callback, index: cc})
        this[eventName].currCount++
        return {
            unsubscribe: () => {
                this[eventName].callbacks = 
                    this[eventName].callbacks.filter(item => item.index != cc)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (this.hasOwnProperty(eventName)){
            return this[eventName].callbacks.map(cb => cb.func(...args))
        }
        return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */