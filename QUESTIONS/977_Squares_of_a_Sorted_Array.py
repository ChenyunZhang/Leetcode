# https://leetcode.com/problems/squares-of-a-sorted-array/

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        # use two pointers
        arr =len(nums)*[0]
        left=0
        right=len(nums)-1
        i =len(nums)-1
        
        while right>=left:
            a = nums[right]**2
            b = nums[left]**2
            if a>b:
                arr[i]=a
                right-=1
            else:
                arr[i]=b
                left+=1
            i-=1
        return arr