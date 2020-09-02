
num = -1
while num < 0:
    num = int(input('Type an integer positive number: '))
print('Type 1 to convert it to binary')
print('Type 2 to convert it to octal')
print('Type 3 to convert it to em Hex')
choose = int(input())

if choose == 1:
    stack = list()
    remain = 0
    div = -1
    t = 0
    while div != 0:
        div = num // 2
        remain = num % 2
        stack.append(remain)
        num = div
        t += 1
    for i in range (t):
        print(stack.pop(), end ='')

elif choose == 2:
    stack = list()
    remain = 0
    div = -1
    t = 0
    while div != 0:
        div = num // 8
        remain = num % 8
        stack.append(remain)
        num = div
        t += 1
    for i in range (t):
        print(stack.pop(), end ='')

elif choose == 3:
    stack = list()
    remain = 0
    div = -1
    t = 0
    while div != 0:
        div = num // 16
        remain = num % 16
        if remain == 10:
            remain = 'A'
        elif remain == 11:
            remain = 'B'
        elif remain == 12:
            remain = 'C'
        elif remain == 13:
            remain = 'D'
        elif remain == 14:
            remain = 'E'
        elif remain == 15:
            remain = 'F'
        stack.append(remain)
        num = div
        t += 1
    for i in range (t):
        print(stack.pop(), end ='')

else:
    print('Invalid option!')