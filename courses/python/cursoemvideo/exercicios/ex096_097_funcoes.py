def msg(msg):
    t = len(msg)
    print()
    print('-' * (t + 10))
    print(f'     {msg}     ')
    print('-' * (t + 10))
    print()


def area(largura, comprimento):
    print(f'A área do terreno é {largura * comprimento:.2f} m2.')


msg('Cálculo de área')

l = float(input('Largura: '))
c = float(input('Comprimento: '))

area(l, c)

