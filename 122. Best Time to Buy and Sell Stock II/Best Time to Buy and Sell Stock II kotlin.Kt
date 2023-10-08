/*
Runtime
178 ms
Beats
44.85%
Memory
38 MB
Beats
19.35%
*/
class Solution {
    fun maxProfit(prices: IntArray): Int {
        var ans = 0
        var buyDayPrice = prices[0]
        for (i in 1 until prices.size){
            if (prices[i] - buyDayPrice > 0){
                ans += prices[i] - buyDayPrice
            }
            buyDayPrice = prices[i]
        }
        return ans
    }
}