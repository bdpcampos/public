from stack import Stack

stack = Stack()

print("Press 1 to convert decimal to binary.")
print("Press 2 to convert binary to decimal.")
choice = int(input())

if choice == 1:
    decimal = -1
    while decimal < 0:
        decimal = int(input("Type a decimal number greater than zero to be converted into a binary number: "))

    remain = 0
    division = -1

    while division!= 0:
        division = decimal // 2
        remain = decimal - division * 2
        decimal = division
        stack.stack_up(remain)

    t = stack.positions()

    for i in range(t):
        print(stack.unstack(), end ="")

if choice == 2:
    binary = -1
    check = 0
    while not check:
        check = 1
        binary = input("Type a valid binary number to be converted into a decimal number: ")
        for i in binary:
            x = int(i)
            stack.stack_up(x)
            if x < 0 or x > 1:
                check = 0

    t = stack.positions()

    decimal = 0

    for i in range(t):
        x = stack.unstack()
        decimal += x * (2 ** i)

    print(decimal)

