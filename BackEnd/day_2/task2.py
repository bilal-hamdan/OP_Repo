fac =1
def my_factorial(n):
    if n == 1 : 
        return fac
    fac *= n
    n -=1
    my_factorial(n)
    return(fac)

print(my_factorial(5))
