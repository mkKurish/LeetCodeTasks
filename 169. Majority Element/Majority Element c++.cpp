/*
Runtime
7 ms
Beats
97.67%
Memory
19.9 MB
Beats
15.90%
*/
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        return nums[nums.size()/2];
    }
};

/*
Runtime
320 ms
Beats
8.33%
Memory
110.3 MB
Beats
7.9%
*/
typedef unsigned short us;
class Solution {
public:
    void merge(vector<int>& v, us firstStart, us secondStart, us rightEnd){
        us i = firstStart;
        us j = secondStart;
        vector<int> newV;
        while (i < secondStart && j <= rightEnd){
            if (v[i] < v[j]){
                newV.push_back(v[i]);
                i++;
            }else{
                newV.push_back(v[j]);
                j++;
            }
        }
        while (i < secondStart){
            newV.push_back(v[i]);
            i++;
        }
        while (j <= rightEnd){
            newV.push_back(v[j]);
            j++;
        }
        for (us k = 0; k < newV.size(); k++)
            v[k + firstStart] = newV[k];
    }
    void mergeSort(vector<int>& v, us left, us right){
        if (right - left > 0){
            us mid = (right + left) / 2;
            mergeSort(v, left, mid);
            mergeSort(v, mid + 1, right);
            merge(v, left, mid + 1, right);
        }
    }
    int majorityElement(vector<int>& nums) {
        mergeSort(nums, 0, nums.size() - 1);
        us currCount = 1;
        int currElement = nums[0];
        for (us i = 1; i < nums.size(); i++){
            if (nums[i] == currElement){
                currCount++;
                if (currCount > nums.size()/2)
                    return currElement;
            }else{
                currCount = 1;
                currElement = nums[i];
            }
        }
        return currElement;
    }
};