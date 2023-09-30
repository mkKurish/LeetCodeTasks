/*
Runtime
Details
200ms
Beats 82.40%of users with Kotlin
Memory
Details
36.63MB
Beats 86.82%of users with Kotlin
*/
class Solution {
    fun romanToInt(s: String): Int {
        var rez = 0
        var lastC = s.get(0)
        var accum = 0
        for (letter in s){
            if (arabicAnalogOf(lastC) < arabicAnalogOf(letter)){
                rez -= accum
                accum = arabicAnalogOf(letter)
            } else if(arabicAnalogOf(lastC) == arabicAnalogOf(letter)){
                accum += arabicAnalogOf(letter)
            } else{
                rez += accum
                accum = arabicAnalogOf(letter)
            }
            lastC = letter
        }
        rez += accum
        return rez
    }

    fun arabicAnalogOf(c: Char) = when(c){
            'I' -> 1
            'V' -> 5
            'X' -> 10
            'L' -> 50
            'C' -> 100
            'D' -> 500
            'M' -> 1000
            else -> 99999
    }
}