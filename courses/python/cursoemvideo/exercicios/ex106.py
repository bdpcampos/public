def msg(msg, cor):
    t = len(msg)
    print(f'{cor}~' * (t + 10))
    print(f'     {msg}     ')
    print('~' * (t + 10))
    print('\033[m')


def sisAjuda():
    from time import sleep
    funcao = ''
    while True:
        sleep(0.3)
        msg('SISTEMA DE AJUDA PyHELP', '\033[;30;42m')
        funcao = input('Função ou Biblioteca > ')
        if funcao == 'fim':
            break
        sleep(0.3)
        print()
        msg(f'Acessando o manual do comando *{funcao}*', '\033[;30;44m')
        sleep(0.3)
        print('\033[;37;40m', end='')
        help(funcao)
        print('\033[m')
    msg('ATÉ LOGO!', '\033[;30;41m')



sisAjuda()
