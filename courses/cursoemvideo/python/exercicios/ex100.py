from random import randint


def sorteia():
    numeros = []
    print('Foram sorteados os números: [', end = '')
    for x in range(5):
        n = randint(0, 9)
        numeros.append(n)
        print(f' {n}', end = '')
    print(' ]\n')
    return numeros


def somaPar(numeros):
    soma_par = 0
    for x in numeros:
        if x % 2 == 0:
            soma_par += x
    print(f'A soma dos valores  pares de {numeros} é {soma_par}')


somaPar(sorteia())

