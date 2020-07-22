filme1 = {'titulo':'Star Wars',
         'ano':'1977',
         'diretor': 'George Lucas'
         }
print('---', 1, '-' * 40)
print(filme1.values())
print('---', 2, '-' * 40)
print(filme1.keys())
print('---', 3, '-' * 40)
print(filme1.items())
print('---', 4, '-' * 40)
filme1['oscar'] = 'não'
print(filme1)
print('---', 5, '-' * 40)
print(filme1['oscar'])
print('---', 6, '-' * 40)
del filme1['oscar']
print(filme1)
print('---', 7, '-' * 40)
for k, v in filme1.items():
    print(f'O {k} é {v}.')
print('---', 8, '-' * 40)
filme2 = {'titulo':'Avengers',
         'ano':'2012',
         'diretor': 'Joss Whedon'
         }
filme3 = {'titulo':'Matrix',
         'ano':'1999',
         'diretor': 'Wachouwski'
         }

locadora = [filme1, filme2, filme3]

print(locadora)
print('---', 9, '-' * 40)
print(locadora[2]['titulo'])
print('---', 10, '-' * 40)
print(f'O título {locadora[0]["titulo"]} foi lançado em {locadora[0]["ano"]}')
print('---', 11, '-' * 40)
for x in locadora:
    print(x['titulo'])
print('---', 12, '-' * 40)
for x in range(len(locadora)):
    print(f'O título {locadora[x]["titulo"]} foi lançado em {locadora[x]["ano"]} e o diretor é {locadora[x]["diretor"]}')
print('---', 13, '-' * 40)
while True:
    filme = dict()
    filme['titulo'] = input('Digite o título: ')
    filme['ano'] = input('Digite o ano: ')
    filme['diretor'] = input('Digite o diretor: ')
    locadora.append(filme.copy())
    ###### Poderia ser também, ao invéz de usar o .copy(
    continua = input('Deseja continuar?[S/N]: ').upper().strip()
    if continua == 'N':
        break

print('---', 14, '-' * 40)
for x in range(len(locadora)):
    print(f'O título {locadora[x]["titulo"]} foi lançado em {locadora[x]["ano"]} e o diretor é {locadora[x]["diretor"]}')
print('---', 15, '-' * 40)