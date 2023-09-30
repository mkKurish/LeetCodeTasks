/*
Runtime
0 ms
Beats
100%
Memory
9 MB
Beats
26.27%
*/
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        unsigned char i = 0;
        unsigned char j = 0;
        while (i < nums.size() - j){
            if (nums[i] == val){
                nums[i] = nums[nums.size() - j - 1];
                j++;
            }else{
                i++;
            }
        }
        return nums.size() - j;
    }
};