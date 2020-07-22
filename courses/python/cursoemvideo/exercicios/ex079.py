
numeros = list()

n = 0

while n != -1:

    n = int(input('Digite um número [para sair digite -1]: '))

    if n in numeros:

        print('O número já existe na lista!')

    elif n != -1:
        numeros.append(n)

print(sorted(numeros))