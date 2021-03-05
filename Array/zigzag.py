# 6. ZigZag Conversion
# The string "PAYPALISHIRING" is written in a zigzag pattern 
# on a given number of rows like this: (you may want to 
# display this pattern in a fixed font for better legibility)

# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# P     I    N
# A   L S  I G
# Y A   H R
# P     I

# intuition 
# create an arr that containes numRows
# 0123210123210

def convert(s,numRows):
    arr = [[] for i in range(numRows)]
    label = 0
    mark = True
    for i in s:
        arr[label].append(i)
        if label < numRows and mark: label+=1
        if label == numRows: 
            mark = False
            label-=1
        if not mark and label>0: label -= 1
        if label == 0: mark = True
    flatten_arr = [i for l in arr for i in l]
    return "".join(flatten_arr)
convert("PAYPALISHIRING",4)

