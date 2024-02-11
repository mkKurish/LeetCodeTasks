var topKFrequent = function(nums, k) {
    const freq = new Map()
    nums.forEach((el) => {
        if (freq.has(el))
            freq.set(el, freq.get(el) + 1)
        else
            freq.set(el, 1)
    })
    const pairs = []
    for(let pair of freq){
        pairs.push(pair)
    }
    pairs.sort((pair1, pair2) => pair2[1] - pair1[1])
    const ans = []
    pairs.forEach((pair, idx) => {
        if (idx < k)
            ans.push(pair[0])
    })
    return ans
};

const nums = [1, 1, 1, 2, 2, 3]

console.log(topKFrequent(nums, 2))