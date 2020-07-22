numeros = list()
pares = list()
impares = list()

while True:
    numeros.append(int(input('Digite um número: ')))
    continua = input('Deseja continuar?[S/N] ').upper().strip()
    if continua == 'N':
        break

for x in range(len(numeros)):
    if numeros[x] % 2 == 0:
        pares.append(numeros[x])
    else:
        impares.append(numeros[x])

print(f'A lista principal é {numeros}')
print(f'A lista de pares é {pares}')
print(f'A lista de impares é {impares}')

