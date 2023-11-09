/*
Runtime
130 ms
Beats
100%
Memory
34 MB
Beats
100%
*/
class Solution {
    fun addBinary(a: String, b: String): String = (a.toBigInteger(2) + b.toBigInteger(2)).toString(2)
}