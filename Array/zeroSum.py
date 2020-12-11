def sumZero(array):
    for i in array:
        for j in array:
            if i != 0 and i+j ==0:
                return [i,j]

print(sumZero([-2,-1,9,0,12,43,12,2,3,4,5,6,7,]))

# better approach, use the pointers

def sumZero(array):
    left = 0
    right = len(array) - 1
    while left<right:
        sum = array[left] + array[right]
        if (sum === 0):
            return [array[left],array[right]]
        elif (sum>0):
            right-=1
        else:
            left+=1

