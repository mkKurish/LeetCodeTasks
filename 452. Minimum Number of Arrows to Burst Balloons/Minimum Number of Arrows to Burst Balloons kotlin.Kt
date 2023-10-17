/*
Runtime
978 ms
Beats
24.17%
Memory
103.9 MB
Beats
5.84%
 */
class Solution {
    fun findMinArrowShots(points: Array<IntArray>): Int {
        points.sortWith(compareBy({it[0]}, {it[1]}))
        var arrows = 1
        var arrX = points[0][0]
        var minEnd = points[0][1]
        for (i in 1..points.lastIndex){
            val (start, end) = points[i]
            if (minEnd < start){
                arrows++
                minEnd = end
            }
            if (end < minEnd) minEnd = end
            arrX = start
        }
        return arrows
    }
}