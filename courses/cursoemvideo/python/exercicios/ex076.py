
produtos_precos = ['Lápis', 1.75,
                   'Borracha', 2.00,
                   'Caderno', 15.90,
                   'Estojo', 25.00,
                   'Transferidor', 4.20,
                   'Compasso', 9.99,
                   'Mochila', 120.32,
                   'Canetas', 22.30,
                   'Livro', 34.90]

print('{:-^40}'.format(''))
print('{:^40}'.format('LISTAGEM DE PREÇOS'))
print('{:-^40}'.format(''))

for x in range(0, len((produtos_precos))):
    if x % 2 == 0:
        print(f'{produtos_precos[x]:.<30}R$', end = '')
    else:
        print(f'{produtos_precos[x]:>8.2f}')
print('{:-^40}'.format(''))

