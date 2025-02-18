fib_list = [0, 1]

def fib_sir(n):

    x = 2
    
    for x in range(n):
        fib_list.append(fib_list[-1] + fib_list[-2])
        x += 1

fib_sir(10)

print(fib_list)
