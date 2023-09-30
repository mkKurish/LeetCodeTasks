/*
Runtime
3 ms
Beats
73.32%
Memory
9.9 MB
Beats
15.96%
*/
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int l = 0;
        int r = nums.size();
        int mid = (r + l) / 2;
        while (nums[mid] != target && l != r) {
            if (nums[mid] > target)
                r = mid;
            else if (nums[mid] < target)
                l = mid;
            if (mid == (r + l) / 2)
                return r;
            mid = (r + l) / 2;
        }
        return mid;
    }
};