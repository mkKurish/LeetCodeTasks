/*
Runtime
0 ms
Beats
100%
Memory
9.3 MB
Beats
16.6%
*/
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        unsigned char i = 0;
        unsigned char j = 0;
        while (i < m + j && j < n) {
            if (nums1[i] > nums2[j]) {
                nums1.insert(nums1.begin() + i, nums2[j]);
                nums1.pop_back();
                j++;
            }
            i++;
        }
        while (j < n) {
            nums1[i] = nums2[j];
            i++;
            j++;
        }
    }
};