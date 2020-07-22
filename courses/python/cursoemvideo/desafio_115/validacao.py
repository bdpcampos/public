

def validacao_menu():
    '''
    Recebe e valida a opção de entrada do menu, de 1 a 3.
    :param n: Input
    :return: 1 a 3
    '''
    from desafio_115.graficos import txt_verde, txt_vermelho_bold
    n = 0
    while True:
        try:
            n = int(input(txt_verde("Sua opção: ")))
            if n in [1, 2, 3]:
                return n
            else:
                print(txt_vermelho_bold("Erro: digite uma opção válida."))
        except ValueError:
            print(txt_vermelho_bold("Erro: digite uma opção válida."))


def validacao_nome():
    try:
        return input('Nome: ').strip()
    except ValueError:
        print("Erro: digite uma opção válida.")


def validacao_idade():
    while True:
        try:
            n = int(input("Idade: "))
            if 120 > n >= 0:
                return n
            else:
                print('\033[1;31mERRO!\033[m \033[31mDigite uma idade válida\033[m')
        except (ValueError, TypeError):
            print('\033[1;31mERRO!\033[m \033[31mDigite uma idade válida\033[m')
            continue
