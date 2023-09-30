/*
Runtime
135 ms
Beats
86.64%
Memory
34.9 MB
Beats
36.83%
*/
class Solution {
    fun isValid(s: String): Boolean{
        val st = Stack<Char>()
        for (e in s){
            if (e in "({[")
                st.push(e)
            else{
                if (st.isEmpty() || st.peek() != revert(e))
                    return false
                else
                    st.pop()
            }
        }
        return st.isEmpty()
    }
    fun revert(c: Char) = when(c){
        '(' -> ')'
        '[' -> ']'
        '{' -> '}'
        ')' -> '('
        ']' -> '['
        '}' -> '{'
        else -> '?'
    }
}