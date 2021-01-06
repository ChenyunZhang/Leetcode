class Solution:
    def solve(self, heights):
        ans = []
        highest = -1
        for i in range(len(heights) - 1, -1, -1):
            if heights[i] > highest:
                ans.append(i)
                highest = heights[i]
        return ans[::-1]
        
        
# //pseudocode
# //use a 2 pointer approach
# //have one pointer on the current building and another one going to the next building
# //if the pointer that is moving has a height greater than the one that is not, you move the static pointer to the next position and try again
# //repeat the same process until you have been through every


        # result = []
        # slow = 0
        # fast = 0
        # while slow < len(heights):
        #     fast = slow+1
        #     while fast<len(heights):
        #         if heights[fast]>=heights[slow]:
        #             heights[slow] = False
        #             break
        #         fast+=1
        #     slow+=1
        
        # for i in range(len(heights)):
        #     if heights[i]:
        #         result.append(i)
        # return result