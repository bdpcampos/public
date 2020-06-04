n = int(input('Digite um numero: '))

contador = n -1

print('{}! = {}'.format(n,n), end = '')

while contador > 0:
    n *= contador
    print(' x {}'.format(contador), end = '')
    contador -= 1

print(' = {}'.format(n))
