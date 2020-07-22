
matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

soma_pares = soma_coluna_3 = maior_linha_2 = 0

for linha in range(3):
    for coluna in range(3):
        matriz[linha][coluna] = (int(input(f'Digite um valor para [{linha}, {coluna}]: ')))
        if matriz[linha][coluna] % 2 == 0:
            soma_pares += matriz[linha][coluna]
        if coluna == 2:
            soma_coluna_3 += matriz[linha][coluna]
        if linha == 1 and matriz[linha][coluna] > maior_linha_2:
            maior_linha_2 = matriz[linha][coluna]

####################################################################################

print('-=' * 30)

for linha in range(3):
    for coluna in range (3):
        print(f'[ {matriz[linha][coluna]} ]', end ='')
    print('')

print(f'A soma de todos os valores pares é {soma_pares}.\nA soma dos valores da terceira coluna é {soma_coluna_3}.\nO maior valor da segunda linha é {maior_linha_2}.')