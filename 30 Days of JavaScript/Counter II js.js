/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        curVal: init,
        increment() {
            return ++this.curVal
        },
        decrement() {
            return --this.curVal
        },
        reset(){
            this.curVal = init
            return this.curVal
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */