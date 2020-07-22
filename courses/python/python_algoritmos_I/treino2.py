
numeros = list()
tamanho = int(input("Qual o tamanho do vetor: "))

for x in range(tamanho):
    valor = int(input(f"Digite o numero do vetor na posição {x}: "))
    numeros.append(valor)

print("Vetor: ", numeros)
print("Posição 1 - ", numeros[1])

# BUSCA LINEAR

numero_pesquisar = int(input("Digite o valor a ser pesquisado no vetor: "))
posicao_resultado = -1

for x in range (tamanho):
    if numero_pesquisar == numeros[x]:
        posicao_resultado = x
        break

if posicao_resultado < 0:
    print("O valor não foi encontrado")
else:
    print(f"O valor está na posição: {posicao_resultado}")

# FIM BUSCA LINEAR

#SELECTION SORT

swapped = True

while swapped:
    swapped = False
    for y in range(1, tamanho):
        if numeros[y] < numeros[y-1]:
            numeros[y], numeros[y-1] = numeros[y-1], numeros[y]
            swapped = True
    print("Vetor: ", numeros)

#FIM SELECTION SORT

#BUSCA BINARIA

item_buscado = int(input("Digite o número a ser buscado pela busca binaria: "))
maior = int(tamanho-1)
menor = 0
meio = 0
achou = True

while numeros[meio] != item_buscado:
    meio = (maior + menor) // 2
    if numeros[maior] == item_buscado:
        meio = maior
    elif numeros[menor] == item_buscado:
        meio = menor
    elif item_buscado > numeros[maior] or item_buscado < numeros[menor]:
        achou = False
        break
    elif item_buscado < numeros[meio]:
        maior = meio
        print("-")
    elif item_buscado > numeros[meio]:
        menor = meio
        print("+")


if achou:
    print(f"Achamos o valor! Está na posição {meio} --> {numeros[meio]} = {item_buscado}")
else:
    print("O número não foi encontrado!! =( ")

#FIM BUSCA BINARIA