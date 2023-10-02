/*
Runtime
193 ms
Beats
84.42%
Memory
37.5 MB
Beats
66.73%
*/
class Solution {
    fun canConstruct(ransomNote: String, magazine: String): Boolean {
        if (ransomNote.length > magazine.length)
            return false
        val alphabet = IntArray(26)
        magazine.forEach { alphabet[it - 'a'] += 1 }
        ransomNote.forEach {
            if (alphabet[it - 'a'] == 0) return false
            else alphabet[it - 'a'] -= 1
        }
        return true
    }
}

/*
Runtime
250 ms
Beats
19.62%
Memory
38.1 MB
Beats
30.77%
*/
class Solution {
    fun canConstruct(ransomNote: String, magazine: String): Boolean {
        val mutableHashMap = mutableMapOf<Char, Int>()
        for (l in magazine)
            mutableHashMap[l] = mutableHashMap.getOrDefault(l, 0) + 1
        for (l in ransomNote){
            if (mutableHashMap.getOrDefault(l, 0) == 0)
                return false
            else
                mutableHashMap[l] = mutableHashMap[l]!!.minus(1)
        }
        return true
    }
}