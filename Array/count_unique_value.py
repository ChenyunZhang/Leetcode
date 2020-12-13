# approach 1
def countUniqValues(arr):
    dict = {}
    for i in arr:
        if i in dict:
            dict[i]+=1
        else:
            dict[i]=1

    
    return (len(dict))

print(countUniqValues([1,1,1,1,1,1,1,2,3,4,4]))

# pointer
def countUniqValues(arr):
    