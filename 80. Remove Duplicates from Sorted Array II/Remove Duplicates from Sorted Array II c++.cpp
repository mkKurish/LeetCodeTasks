/*
Runtime
0 ms
Beats
100%
Memory
11.2 MB
Beats
29.37%
*/
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int count = 1;
        int i = 1;
        int j = 1;
        while (j < nums.size()){
            if (nums[j] != nums[j - 1]){
                nums[i++] = nums[j];
                count = 1;
            }else{
                if (count < 2){
                    nums[i++] = nums[j];
                    count++;
                }
            }
            j++;
        }
        return i;
    }
};