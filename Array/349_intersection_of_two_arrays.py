class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # Approach 1 brute force:
        # if len(nums1)>len(nums2):
        #     long_nums = nums1 
        #     short_nums = nums2
        # else:
        #     long_nums = nums2
        #     short_nums = nums1
        
        # arr = []
        # for i in range(len(long_nums)):
        #     for j in range(len(short_nums)):
        #         if long_nums[i] == short_nums[j] and short_nums[j] not in arr:
        #             arr.append(short_nums[j])
                    
        # return(arr)
        
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        if len(nums1)>len(nums2):
            long_nums = nums1 
            short_nums = nums2
        else:
            long_nums = nums2
            short_nums = nums1
        dict = {}
        arr = []
        
        for i in long_nums:
            if i in dict.keys():
                dict[i]+=1
            else:
                dict[i]=1
                
        for i in dict:
            if i in short_nums and dict[i] != 0:
                arr.append(i)
                dict[i] -=1
        
        return arr
        
        
                