# https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

# the idea here is that for all the index, if they are not there, it will not change not negative number.
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        final = []
        for i in range(len(nums)):
            temp = abs(nums[i])-1
            if nums[temp]>0:
                nums[temp]*=-1
            print(nums)
        for i,n in enumerate(nums):
            if n>0:
                final.append(i+1)
        return final