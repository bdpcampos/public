# matriz = [[], [], []]
#
# for x in range(3):
#     for y in range(3):
#         matriz[x].append(int(input(f'Digite um valor para [{x}, {y}]: ')))

# Eu fiz assim com append, para não precisar do apend e atribuir os valores diretamente na posição, tem que iniciar as listas com valores#

####################################################################################

matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

for x in range(3):
    for y in range(3):
        matriz[x][y] = (int(input(f'Digite um valor para [{x}, {y}]: ')))

####################################################################################

print('-=' * 30)

for x in range(3):
    for y in range (3):
        print(f'[ {matriz[x][y]} ]', end = '')
    print('')
