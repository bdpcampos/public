lanche = ('hamburguer', 'suco', 'pizza', 'pudim')

for comida in lanche:
    print(f'{comida}')

for cont in range(0, len(lanche)):
    print(f'{lanche[cont]}')

for pos, comida in enumerate(lanche):
    print(f'{comida}  {pos}')

print(sorted(lanche))

#######################################################

a = (2, 5, 4)

b = (5, 8, 1, 2)

print(a)

print(b)

print(a + b)

print(b + a)

c = a + b

print(c.count(5))

print(c.index(8))

print(c.index(2)) ## Pega a primeira posição que encontrar o 2

print(c.index(2, 1)) ## Pega a primeira posição que encontrar o 2, a partir da posição 1

#######################################################

# Tuples são semelhantes a vetores do Java ou outras linguagens, mas no Python aceita qualquer tipo de tipagem no mesmo elemento

pessoa = ('Gustavo', 39, 'Masculino', 99.8)

print(pessoa)

#############################################################

#Dá sim para mudar uma tuple, mas tem que ser ela inteira, atribuir outra tupla a variavel composta

lanche = ('hamburguer', 'suco', 'pizza', 'pudim')

print(lanche)

lanche = ('item', 'mesa')

print(lanche)