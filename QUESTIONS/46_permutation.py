class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # base case
        res = []
        
        def backtrack(path,choices):
            if len(path) == len(choices):
                res.append(list(path))
                return
            
            for i in choices:
                if i in path: continue
                path.append(i)
                backtrack(path,choices)
                path.pop()
                
        backtrack([],nums)
        return res