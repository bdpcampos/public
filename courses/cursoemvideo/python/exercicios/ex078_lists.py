
numeros = list()

for x in range(0, 5):
    numeros.append(int(input(f'Digite um número para a posição {x}: ')))

print(f'Você digitou os valores {numeros}')

###################################################################################

print(f'O maior valor digitado foi {max(numeros)} nas posições ', end = '')

cont = -1

for i, x in enumerate(numeros):  ### Posibilidade de usar ENUMERATE para saber o item e o indice
    if x == max(numeros):
        print(i, end = ' ')

###################################################################################

print(f'\nO menor valor digitado foi {min(numeros)} nas posições ', end = '')

cont = -1

for x in numeros:   ### Outra possibilidade usando um contador para saber a posição do item
    cont += 1
    if x == min(numeros):
        print(cont, end = ' ')


