/* Brute force */
var longestConsecutive = function(nums) {
    const map = new Map()
    for (let num of nums){
        if (!map.has(num)){
            let down = num
            let up = num
            let count = 1
            while (map.has(--down)){
                count++
            }
            while (map.has(++up)){
                count++
            }
            map.set(num, count)
        }
    }
    return map.size ? Math.max(...map.values()) : 0
};

/* Second try */
var longestConsecutive = function (nums) {
    const map = new Map()
    for (let num of nums) {
        if (!map.has(num)) {
            if (map.has(num - 1)) {
                let down = num
                const newDownVal = map.get(num - 1) + (map.has(num + 1) ? map.get(num + 1) : 0) + 1
                while (map.has(--down)) {
                    map.set(down, newDownVal)
                }
                map.set(num, newDownVal)
            }
            if (map.has(num + 1)) {
                let up = num
                const newUpVal = map.has(num) ? map.get(num) : map.get(num + 1) + 1
                while (map.has(++up)) {
                    map.set(up, newUpVal)
                }
                map.set(num, newUpVal)
            }
            if (!map.has(num)) map.set(num, 1)
        }
        console.log(map)
    }
    return map.size ? Math.max(...map.values()) : 0
};

/* The right way */
function longestConsecutive(nums) {
    if (nums == null || nums.length === 0) return 0;
    
    const set = new Set(nums);
    let max = 0;
  
    for (let num of set) {
      if (set.has(num - 1)) continue;
  
      let currNum = num;
      let currMax = 1;
  
      while (set.has(currNum + 1)) {
        currNum++;
        currMax++;
      }
      max = Math.max(max, currMax);
    }
  
    return max;
  }