
numeros = (int(input('Digite um valor: ')), int(input('Digite um valor: ')), int(input('Digite um valor: ')), int(input('Digite um valor: ')))

print(f'O 9 apareceu {numeros.count(9)} vezes.')

if 3 in numeros:
    print(f'O 3 foi digitado primeiro na {numeros.index(3)} posição.')

print('Os numeros pares foram: ', end = '')

for x in numeros:
    if x % 2 == 0:
        print(x,' ', end = '')