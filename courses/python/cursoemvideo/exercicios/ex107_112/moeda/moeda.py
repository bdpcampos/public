
def moeda(valor=0.0):
    import locale
    locale.setlocale(locale.LC_MONETARY,'Portuguese_Brazil.1252')
    return f'{locale.currency(valor)}'


def aumentar(valor=0, porcentagem=0, formatado = True):
    if formatado:
        return moeda(valor * (1 + porcentagem / 100))
    else:
        return valor * (1 + porcentagem / 100)


def diminuir(valor=0, porcentagem=0, formatado = True):
    if formatado:
        return moeda(valor * (1 - porcentagem / 100))
    else:
        return valor * (1 - porcentagem / 100)


def dobro(valor=0, formatado = True):
    if formatado:
        return moeda(valor * 2)
    else:
        return valor * 2


def metade(valor=0, formatado = True):
    if formatado:
        return moeda(valor / 2)
    else:
        return valor / 2


def msg(msg):
    t = len(msg)
    print('-' * (t + 10))
    print(f'     {msg}     ')
    print('-' * (t + 10))


def resumo(valor=0, pa=0, pr=0):
    msg('RESUMO DO VALOR')
    print(f'Preço analisado:   {moeda(valor)}')
    print(f'Dobro do preço:    {dobro(valor)}')
    print(f'Metade do preço:   {metade(valor)}')
    print(f'{pa}% de aumento:    {aumentar(valor, pa)}')
    print(f'{pr}% de redução:    {diminuir(valor, pr)}')