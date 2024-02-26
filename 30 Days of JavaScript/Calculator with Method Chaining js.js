class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.val = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.val += value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.val -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.val *= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value == 0)
            throw new Error('Division by zero is not allowed')
        this.val /= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        const negativePow = value < 0
        value = Math.abs(value)
        let newVal = 1
        while (value > 0){
            newVal *= this.val
            value--
        }
        this.val = negativePow ? 1 / newVal : newVal
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.val
    }
}