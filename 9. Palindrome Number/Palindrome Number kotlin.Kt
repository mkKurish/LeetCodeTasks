/*
Runtime
230 ms
Beats
43.28%
Memory
37.9 MB
Beats
7.20%
*/
class Solution {
    fun isPalindrome(x: Int): Boolean {
        val b = x.toString()
        return b.take(b.length/2) == b.takeLast(b.length/2).reversed()
    }
}