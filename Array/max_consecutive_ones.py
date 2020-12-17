def findMaxConsecutiveOnes(nums):
    # pseudocode
    # setup a counter=1
    # loop throught the list.
    # check if the element is equal to 1
    # if the element is equal to 1, setup a pointer start at the element
    
    # ex: [1,1,0,1,1,1]
    i = 0 
    result = 0
    counter = 0
    if 1 not in nums: 
        return 0
    while i<len(nums):
        if nums[i] == 1:
            while nums[i] == 1:
                counter+=1
                result = max(counter,result)
                if i == len(nums)-1:
                    return result
                else:
                    i+=1
        counter = 0
        i+=1
    print("result",result)

# print(findMaxConsecutiveOnes([1,1,0,1,1,1]))
print(findMaxConsecutiveOnes([1,0]))


# class Solution:
#     def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
#         b = ''.join(map(str, nums))
#         return len(max(b.split('0'), key=len))
# Explain:

# Convert list to string
# Split string to substring by '0' character
# Return max lenght in list