import collections

def groupAnagrams(strs):
    ans = collections.defaultdict(list)
    print(ans)
    for i in strs:
        ans[tuple(sorted(i))].append(i)
    return ans.values()

strs = ["eat","tea","tan","ate","nat","bat"]