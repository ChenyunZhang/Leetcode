class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        # setup two pointers left and right
        # base case is when left >= right, do nothing
        # otherwise, swap s[left] and s[right], and call helper(left+1),(right-1)
        def helper(left,right):
            if left < right:
                s[left],s[right] = s[right],s[left]
                helper(left+1,right-1)
            
        helper(0,len(s)-1)