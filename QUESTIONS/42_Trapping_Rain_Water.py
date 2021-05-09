class Solution:
    def trap(self, height: List[int]) -> int:
        final = 0
        for i in range(1,len(height)-1):
            # started from 1, ended at len(height-1), no bar is on the left and right of the first and last bar, so we can skip these two.
            left_max = max(height[:i])
            right_max = max(height[i+1:])
            curr_max = min(left_max,right_max)
            water = curr_max - height[i]
            if water>0: final+=water
        return final