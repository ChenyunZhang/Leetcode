# https://leetcode.com/problems/find-all-duplicates-in-an-array/


# if the number had appeared, push it to the final, else mark it as negative
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        final = []
        for i in nums:
            temp = abs(i)-1
            if nums[temp]>0:
                nums[temp]*=-1
            else:
                final.append(abs(i))
        return final