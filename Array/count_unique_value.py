# approach 1
# def countUniqValues(arr):
#     dict = {}
#     for i in arr:
#         if i in dict:
#             dict[i]+=1
#         else:
#             dict[i]=1

    
#     return (len(dict))

# print(countUniqValues([1,1,1,1,1,1,1,2,3,4,4]))

# pointer
def countUniqValues(arr):
    pointer = 0
    for i in range(len(arr)):
        if arr[i] != arr[pointer]:
            pointer+=1
            arr[pointer] = arr[i]
    return(pointer+1)

countUniqValues([1,1,1,1,1,1,1,2,3,4,4])

# ! IN JAVASCRIPT
# function countUniqueValues(arr){
#   // add whatever parameters you deem necessary - good luck!
#   let pointer = 0
#   if(arr.length === 0) return 0
  
#   for(let i in arr){
#       if(arr[i] !== arr[pointer]){
#           pointer++
#           arr[pointer] = arr[i]
#       }
#   }
#   return pointer+1
# }