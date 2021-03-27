# https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        final = []
        for i in range(len(arr)-1):
            final.append(max(arr[i+1:]))
        final.append(-1)
        return final