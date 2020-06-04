

def menu(texto):
    print('-' * 40)
    print(f'{texto:^40}')
    print('-' * 40)


def linha():
    print('-' * 40)


def txt_amarelo_bold(texto):
    return f'\033[1:33m{texto}\033[m'


def txt_vermelho_bold(texto):
    return f'\033[1:31m{texto}\033[m'


def txt_azul(texto):
    return f'\033[0:34m{texto}\033[m'


def txt_verde(texto):
    return f'\033[0:32m{texto}\033[m'