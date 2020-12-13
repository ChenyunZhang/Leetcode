class Solution:
    def solve(self, n):
        # Approach1:(iterative way)
        # setup an empty array.
        # iterate through 1 to n*2
        # push the odd numbers into the array.
        # iterate the array, find the sum of all elements.
        
        # arr = []
        # for i in range(1, n*2):
        #     if i%2 != 0:
        #         arr.append(i)
        # return sum(arr)
        
        # sum = 0
        # for i in arr:
        #     sum+=i
        # return(sum)
        
        # Approach2: recursive way
        # base case is when 
