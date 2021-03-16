# Question: https://leetcode.com/problems/count-primes/
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        isPrime = [True for i in range(n)]
        isPrime[0] = isPrime[1] = False
        for i in range(2, n):
            for j in range(i * i, n, i):
                isPrime[j] = False
        return sum(isPrime)