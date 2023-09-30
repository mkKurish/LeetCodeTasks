/*
Runtime
106 ms
Beats
15.14%
Memory
93.7 MB
Beats
11.10%
*/
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        unsigned short buy = 0;
        unsigned short sell = 0;
        unsigned short min = 0;
        for (int i = 1; i < prices.size(); i++){
            if (prices[i] - prices[min] > prices[sell] - prices[buy]){
                sell = i;
                buy = min;
            }
            if (prices[i] < prices[min])
                min = i;
        }
        return prices[sell] - prices[buy];
    }
};