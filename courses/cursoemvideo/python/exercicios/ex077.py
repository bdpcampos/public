tupla = ('hamburguer', 'suco', 'torta', 'pizza', 'pudim', 'sorvete', 'biscoito', 'sushi')

for x in tupla:
    print(f'Na palavra {x.upper()} temos ', end = '')
    for y in x:
        if y in 'aeiou':
            print(y, end = ' ')
    print('')
