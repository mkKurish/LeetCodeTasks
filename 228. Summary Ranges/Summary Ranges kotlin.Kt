/*
Runtime
135 ms
Beats
95.33%
Memory
34.1 MB
Beats
91.48%
*/
class Solution {
    fun summaryRanges(nums: IntArray): List<String> {
        val ans = mutableListOf<String>()
        var last = 270000000
        var append = ""
        for (i in nums){
            if (i == last + 1){
                append = "->" + i
            }else{
                if (ans.size != 0)
                    ans[ans.size - 1] += append
                ans += i.toString()
                append = ""
            }
            last = i
        }
        if (ans.size != 0)
            ans[ans.size - 1] += append
        return ans
    }
}