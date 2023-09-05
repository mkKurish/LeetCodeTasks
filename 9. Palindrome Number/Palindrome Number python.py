#Runtime
#64 ms
#Beats
#60.17%
#Memory
#16.2 MB
#Beats
#94.45%
class Solution:
    def isPalindrome(self, x: int) -> bool:
        return (str(x)[:len(str(x))//2] == str(x)[::-1][:len(str(x))//2])