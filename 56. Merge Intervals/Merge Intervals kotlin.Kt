/*
Runtime
336 ms
Beats
45.17%
Memory
44 MB
Beats
63.51%
*/
class Solution {
    fun merge(intervals: Array<IntArray>): Array<IntArray>{
        intervals.sortBy {
            it[0]
        }
        val ans = mutableListOf<IntArray>()
        ans.add(intervals[0])
        for (i in 1 until intervals.size){
            if (intervals[i][0] <= ans.last()[1]){
                if (intervals[i][1] > ans.last()[1])
                    ans.last()[1] = intervals[i][1]
            }else{
                ans.add(intervals[i])
            }
        }
        return ans.toTypedArray()
    }
}