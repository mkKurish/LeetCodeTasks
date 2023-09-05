/*
Runtime
644 ms
Beats
5.38%
Memory
10 MB
Beats
95.93%
*/
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> b(0);
        for (int i = 0; i < nums.size(); i++){
            for (int j = 0; j < i; j++){
                if (nums[i] + nums[j] == target){
                    b.push_back(i);
                    b.push_back(j);
                    return b;
                }
            }
        }
        return b;
    }
};