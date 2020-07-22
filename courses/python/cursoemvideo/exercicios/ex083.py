lista = list()

conta1 = conta2 = 0

lista = input('Digite a expressão: ')

for x in lista:
    if x == '(':
        conta1 += 1
    elif x == ')':
        conta2 += 1

if conta1 == conta2:
    print('A expressão está correta!')
else:
    print('A expressão está errada!')


