def factorial(n):
  if n <= 2:
        return n
  return moization(n)

def moization(n):
    hash = {0:0,1:1,2:2}
    for i in range(3,n+1):
        hash[i] = i * hash[i-1]
    return hash[n]

print(factorial(100))