def findSum(number):
    if number < 1:
        return 0
    return number+findSum(number-1)

print(findSum(100))
