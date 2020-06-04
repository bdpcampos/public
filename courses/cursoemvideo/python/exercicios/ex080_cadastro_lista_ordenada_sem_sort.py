numeros = list()

n = 0

for x in range(10):

    n = int(input('Digite um valor: '))

    if x == 0 or n > numeros[-1]:
        numeros.append(n)
        print('Adicionado ao final da lista...')

    else:
        pos = 0
        while pos < len(numeros):
            if n <= numeros[pos]:
                numeros.insert(pos, n)
                print(f'Adicionado na posição {pos} da lista...')
                break
            pos += 1

    # O que eu tentei fazer.....
    ########################################

    # elif x == 1:
    #     if n > numeros[x -1]:
    #         numeros.append(n)
    #     else:
    #         numeros.insert(0, n)
    #
    # elif n >= numeros[x - 1]:
    #     numeros.insert(x, n)
    #
    # else:
    #     t = x - 1
    #     while n < numeros[t] and t != 0:
    #         t -= 1
    #     numeros.insert(t + 1, n)



print(numeros)