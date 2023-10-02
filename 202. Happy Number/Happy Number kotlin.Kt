/*
Runtime
125 ms
Beats
92.48%
Memory
33.2 MB
Beats
89.47%
*/
class Solution {
    fun isHappy(n: Int): Boolean {
        val hashSet = hashSetOf<Int>()
        var last: Int
        var curr = n
        while (curr != 1){
            hashSet.add(curr)
            last = curr
            curr = 0
            while (last != 0){
                curr += (last % 10) * (last % 10)
                last /= 10
            }
            if (hashSet.contains(curr))
                return false
        }
        return true
    }
}