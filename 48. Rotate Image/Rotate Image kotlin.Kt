/*
Runtime
172 ms
Beats
37.41%
Memory
35.2 MB
Beats
70.57%
*/
class Solution {
    fun rotate(matrix: Array<IntArray>): Unit {
        for (i in matrix.indices){
            var j = 0
            while (j < i){
                val temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
                j++
            }
        }
        for (i in matrix.indices){
            for (j in 0..<(matrix[i].size / 2)){
                val temp = matrix[i][j]
                matrix[i][j] = matrix[i][matrix.size - 1 - j]
                matrix[i][matrix.size - 1 - j] = temp

            }
        }
    }
}