/*
Runtime
4 ms
Beats
79.52%
Memory
7.5 MB
Beats
47.78%
*/
class Solution {
public:
    bool isPalindrome(string s) {
        int i = 0;
        int j = s.length() - 1;
        while (i < j){
            if (!(std::tolower(s[i]) >= 'a' && std::tolower(s[i]) <= 'z' ||
            s[i] >= '0' && s[i] <= '9')){
                i++;
                continue;
            }
            if (!(std::tolower(s[j]) >= 'a' && std::tolower(s[j]) <= 'z' ||
            s[j] >= '0' && s[j] <= '9')){
                j--;
                continue;
            }
            if (std::tolower(s[i]) != std::tolower(s[j]))
                return false;
            i++;
            j--;
        }
        return true;
    }
};