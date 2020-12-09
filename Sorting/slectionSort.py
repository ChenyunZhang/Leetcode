def findSmallest(arr):
    # stores the smallest value
    smallest = arr[0]
    # stores the index of the smallest value
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        # finds the smallest element in the array, and adds it to the new array
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr


print(selectionSort([2, 3, 4, 5, 6, 122, -1]))

# array stores the elements right nect to each other
# list are strewn all over, and one element stores the address of the next one.
# arrays allows fast reads, list allows sequential reads only
# linked list allow fast inserts and deletes
# all elements in the array should be the same type