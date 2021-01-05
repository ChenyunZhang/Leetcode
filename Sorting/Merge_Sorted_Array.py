# Input:
# nums1 = [1,2,3,0,0,0], m = 3
# nums2 = [2,5,6],       n = 3

# Output: [1,2,2,3,5,6]

# pseudocode
# these two arrays are sorted, requiring to modify nums1

# first approach
# def merge(nums1,m,nums2,n):
#     temp = []
#         for i in range(m):
#             temp.append(nums1[i])
#         for i in range(n):
#             temp.append(nums2[i])
#         sort_temp = sorted(temp)
#         for i in range(len(sort_temp)):
#             nums1[i] = sort_temp[i]


