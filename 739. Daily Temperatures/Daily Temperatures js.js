Array.prototype.top = function() {
    return this[this.length - 1]
}

var dailyTemperatures = function(temperatures) {
    const daysStack = [] // contains {dayOrd, dayTemp}
    const result = []
    temperatures.forEach((dTemp, idx) => {
        result[idx] = 0
        while (daysStack.top() && daysStack.top().dayTemp < dTemp){
            result[daysStack.top().dayOrd] = idx - daysStack.top().dayOrd
            daysStack.pop()
        }
        daysStack.push({dayOrd: idx, dayTemp: dTemp})
    })
    return result
};