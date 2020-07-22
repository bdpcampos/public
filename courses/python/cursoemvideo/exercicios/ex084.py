pessoa = list()
pessoas = list()
parar = ''
menor = maior = 0
maiores_pesos = list()
menores_pesos = list()

while True:
    pessoa.append(input(('Nome: ')).strip())
    pessoa.append((float(input('Peso: '))))
    if len(pessoas) == 0:
        maior = menor = pessoa[1]
    else:
        if pessoa[1] > maior:
            maior = pessoa[1]
        elif pessoa[1] < menor:
            menor = pessoa[1]
    pessoas.append(pessoa[:])
    pessoa.clear()
    parar = input('Você quer parar?[S/N]').upper().strip()
    if parar == 'S':
        break

for x in pessoas:
    if x[1] == maior:
        maiores_pesos.append(x[0])
    elif x[1] == menor:
        menores_pesos.append(x[0])

print('-=' * 40)

print(f'Foram cadastradas {len(pessoas)} pessoas.')


# for x in range(0, len(pessoas)):
#     if x == 0:
#         menor = maior = pessoas[x][1]
#         maiores_pesos.append(pessoas[x][0])
#         menores_pesos.append(pessoas[x][0])
#     elif pessoas[x][1] > maior:
#         maior = pessoas[x][1]
#         maiores_pesos.clear()
#         maiores_pesos.append(pessoas[x][0])
#     elif pessoas[x][1] == maior:
#         maiores_pesos.append(pessoas[x][0])
#     elif pessoas[x][1] < menor:
#         menor = pessoas[x][1]
#         menores_pesos.clear()
#         menores_pesos.append(pessoas[x][0])
#     elif pessoas[x][1] == menor:
#         menores_pesos.append(pessoas[x][0])

print(f'O maior peso foi {maior} Kgs, das pessoas: {maiores_pesos}')

print(f'O menor peso foi {menor} Kgs, das pessoas: {menores_pesos}')



