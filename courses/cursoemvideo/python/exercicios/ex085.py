listao = [[], []]
n = 0

for x in range (7):
    n = int(input(f'Digite um número[{x}]: '))
    if n % 2 ==0:
        listao[0].append(n)
    else:
        listao[1].append(n)

listao[0].sort()
listao[1].sort()
print('-=' * 30)
print(listao)