/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freqMap = new Map()
    let maxFreq = 0
    let maxFreqCount = 0
    for (let n of nums) {
        if (freqMap.has(n))
            freqMap.set(n, freqMap.get(n) + 1)
        else
            freqMap.set(n, 1)
        if (freqMap.get(n) > maxFreq){
            maxFreq = freqMap.get(n)
            maxFreqCount = 1
        } else if (freqMap.get(n) == maxFreq) {
            maxFreqCount++
        }
    }
    return maxFreqCount * maxFreq
}