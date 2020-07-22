cadastro1 = ['Pedro', 29]
cadastro2 = ['Maria', 31]
cadastro3 = ['Joao', 25]

pessoas = [cadastro1[:], cadastro2, cadastro3]

print(pessoas)

cadastro1[1] = 91

pessoas[0][1] = 21

print(pessoas)
print(cadastro1)  ### quando insiro uma lista em outro "copiando" os valore com [:] ele copia a lista e não insere ela na outra lista.
                  ### Provei isso copiando o cadastro1 e depois alterando ele, na lista pessoas não mudou pois os valor foram copiados e não a lista que foi inserida

########################################################################

#Fazendo o mesmo teste denovo, a primeira versão sem o [:] (copia) e a segunda com o [:]

print('-'*50)

teste = list()
teste.append('Bruno')
teste.append(40)
galera = list()
galera.append(teste)
print(galera)
teste[0] = 'Maria'
teste[1] = 22
galera.append(teste)
print(teste)
print(galera)

print('-'*50)

teste = list()
teste.append('Bruno')
teste.append(40)
galera = list()
galera.append(teste[:])
print(galera)
teste[0] = 'Maria'
teste[1] = 22
galera.append(teste[:])
print(teste)
print(galera)

########################################################################

# Como chamar itens de lista dentro de lista
print('-'*50)

print(galera[0][0])

for x in galera:
    print(x[0])

for x in galera:
    print(x[1])

for x in galera:
    print(f'{x[0]} tem {x[1]} anos de idade.')

########################################################################

# Usando listas em listas

print('-'*50)

galera2 = list()
dado = list()

for x in range(0, 3):
    dado.append(input('Nome: '))
    dado.append(int(input('Idade: ')))
    galera2.append(dado[:])
    dado.clear()

print(galera2)

for p in galera2:
    if p[1] >= 21:
        print(f'{p[0]} é maior de idade.')
    else:
        print(f'{p[0]} é menor de idade.')