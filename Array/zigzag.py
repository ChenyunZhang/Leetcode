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


def convert(s, numRows):
    arr = [[] for i in range(numRows)]
    label = 0
    mark = True
    for i in s:
        arr[label].append(i)
        if label < numRows and mark:
            label += 1
        if label == numRows:
            mark = False
            label -= 1
        if not mark and label > 0:
            label -= 1
        if label == 0:
            mark = True
    flatten_arr = [i for l in arr for i in l]
    return "".join(flatten_arr)


convert("PAYPALISHIRING", 4)









#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'toolchanger' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING_ARRAY tools
#  2. INTEGER startIndex
#  3. STRING target
#

    # Compare the relative distance between the start and target from using left step and right step.
    # for the example that has 4 items
    # if start is 2, to the right will be 2,3,0,1 to the left will be 2,1,0,3, counting while looping, stop if it finds the target. 
    # compare leftcount and rightcount, return the maximum.
# if startIndex is in the last place.

def toolchanger(tools, startIndex, target):
    leftcount = 0
    rightcount = 0
    i = startIndex
    for _ in range(len(tools)):
        if i == len(tools):
            rightcount+=1
            i = 0
        if tools[i] == target:
            break
        if i < len(tools):
            i+=1
        rightcount+=1

        
    i = startIndex
    
    for _ in range(len(tools)):
        if i == 0:
            leftcount += 1
            i=len(tools)-1
        if tools[i] == target:
            break
        if i > 0:
            i-=1
        leftcount += 1

    return min(leftcount,rightcount)
if __name__ == '__main__':
    
    
    
    
    def maxTickets(tickets):
        tickets.sort()
    arr = []
    i = 0
    final = 0
    while i < len(tickets)-2:
        arr.append([])
        while i < len(tickets)-3 and tickets[i+1]-tickets[i]==0 or tickets[i+1]-tickets[i]==1:
            arr[-1].append(tickets[i])
            i+=1
        arr[-1].append(tickets[i])
        i+=1
    if tickets[i]-tickets[i-1]==0 or tickets[i]-tickets[i-1]==1:
        arr[-1].append(i)
    else:
        arr.append([tickets[i]])
    for i in arr:
        final = max(final,len(i))
            
    return final