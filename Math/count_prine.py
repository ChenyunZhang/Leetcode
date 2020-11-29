def countPrimes(n):
    counter = 0
    nums = n*[True]
    i = 2

    while i*i < n:
        if nums[i] == True:
            j = 2
            while i*j < n:
                nums[i*j] = False
                j+=1
        i+=1

    for x in range(2,n):
        if nums[x] == True:
            counter+=1

    print(counter)
    return counter

countPrimes(15)
# pseudocode
# 1. if the number is less than 2, return 0
# 2. create an array, set all the number to true
# 3. for each number in n, if it is the mutiply of the other numbers, set it to false
# 4. example, when it loops to 2, all numbers, like 4, 6, 8, 10 will be set to false
# !important, the mutiply will be set to i*i<n
# line 8 is checking if the number is true, if it is not, meaning, the value of its mutiplies has been set to false already.

