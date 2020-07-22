print(__name__)


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

for x in range(tamanho):
    ind_menor = x
    for y in range ((x+1), tamanho):
        if numeros[y] < numeros[ind_menor]:
            ind_menor = y
    numeros[ind_menor], numeros[x] = numeros[x], numeros[ind_menor]
    print("Vetor: ", numeros)

#FIM SELECTION SORT

#BUSCA BINARIA

resultado = -1
inicio = 0
fim = int(tamanho - 1)
meio = 0
alvo = int(input("Digite o elemento a ser encontrado: "))

while inicio <= fim:
    meio = int((inicio + fim) / 2)
    if numeros[meio] < alvo:
        inicio = meio + 1
    elif numeros[meio] > alvo:
        fim = meio - 1
    else:
        resultado = meio
        break
if resultado < 0:
    print("Elemento não encontrado")
else:
    print(f"O elemento {alvo} está na posição {resultado} --> {numeros[meio]} = {alvo}")

#FIM BUSCA BINARIA
