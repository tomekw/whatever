def oneLineIsPrime(n): return False if (n % 2 == 0 and n > 2) or n < 2 or 0 in [n%factor for factor in range(3, round(n ** 0.5))] else 7
