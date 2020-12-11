class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
    #     // loop throught the string
    #     // setup a dict = {} to check duplicate
    #     // setup a result number =0 to record the str length
    # set another counter to compare with result number each time, 
    # if result > counter, counter = result
    #     // setup two pointers, the first one in the start point
    #     // the second one move one step to see if the string is empty
    #     // if yes, return 0
    # // if not, add the letter to the array, result number += 1
    # // second pointer move one more step, check if the array has the letter, if yes
    # move the first pointer to where the second pointer is, reset hash, and add #current position as a key to the hash
    # if not, result number+=1, move the second pointer again.
    # repeeat the process
    # return counter
        if len(s) == 0:
            return 0
        
        first = 0
        second = 0
        result = 0
        dict ={}

        while first<len(s):
            if s[first] in dict:      
                dict = {}
                second+=1
                first = second
                counter = 0
                
            dict[s[first]] = 1
            first+=1
            
            if result < len(dict):
                result = len(dict)
            
        print("dict",dict)
        return result
