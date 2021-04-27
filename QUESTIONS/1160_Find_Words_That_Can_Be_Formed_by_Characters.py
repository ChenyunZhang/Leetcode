class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        final = 0
        for word in words:
            flag = True
            for l in word:
                if word.count(l) > chars.count(l):
                    flag = False
                    break
            if flag: final+=len(word)
        return final

        # final = 0
        # for word in words:
        #     dic = collections.Counter(chars)
        #     count = 0
        #     for letter in word:
        #         if dic.get(letter) and dic[letter]>0:
        #             dic[letter]-=1
        #             count+=1
        #     if count==len(word):
        #         final+=len(word)
        # return final