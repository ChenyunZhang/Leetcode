class Solution:
    def solve(self, s):
        length = 0
        result = ""
        while length < len(s):
            counter=1
            while length < len(s)-1 and s[length] == s[length+1]:
                counter+=1
                length+=1
            result+=str(counter)+s[length]
            length+=1

        return result