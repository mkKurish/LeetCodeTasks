/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
    const hash = {}
    let max_length = 0
    let count = 0
  
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i]
  
      if (current == 0) 
        count--
      else if (current == 1) 
        count++
      
      if (count == 0) 
        max_length = i + 1
  
      if (count in hash) 
        max_length = Math.max(max_length, i - hash[count])
      else 
        hash[count] = i
    }
  
    return max_length
  }