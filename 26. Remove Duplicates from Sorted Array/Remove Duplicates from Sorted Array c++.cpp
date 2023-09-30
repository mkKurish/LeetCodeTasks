/*
Runtime
13 ms
Beats
19.72%
Memory
18.9 MB
Beats
16.72%
*/
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        unsigned short i = 1;
        unsigned short j = 0;
        while (i < nums.size()){
            if (nums[i] != nums[i-1]){
                nums[++j] = nums[i];
            }
            i++;
        }
        return j + 1;
    }
};

/*
Runtime
18 ms
Beats
9.61%
Memory
19.7 MB
Beats
5.28%
*/
#include <set>
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        std::set <int> s;
        for (int i = 0; i < nums.size(); i++)
            s.insert(nums[i]);
        std::set <int>::reverse_iterator s_iter = s.rbegin();
        while (s_iter != s.rend())
            nums.insert( nums.begin(), *(s_iter++));
        return s.size();
    }
};