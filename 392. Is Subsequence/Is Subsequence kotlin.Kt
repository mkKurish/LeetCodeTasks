/*
Runtime
145 ms
Beats
28.22%
Memory
33.5 MB
Beats
95.71%
*/
class Solution {
    fun isSubsequence(s: String, t: String): Boolean {
        if (s.length > t.length) return false
        var i = 0
        var j = 0
        while (i < s.length){
            if (j >= t.length) return false
            if (s[i] == t[j])
                i++
            j++
        }
        return true
    }
}