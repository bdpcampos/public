def leiaDinheiro(valor=''):
    while True:
        n = input(valor).replace(',', '.').strip()
        if n.isalpha() or n == '':
            print(f'\033[1;31mERRO:\033[m \033[31m "{n}" é um preço inválido!\033[m')
        else:
            return float(n)


def leiaInt(texto = ''):
    while True:
        try:
            n = int(input(texto))
        except (ValueError, TypeError):
            print('\033[1;31mERRO!\033[m \033[31mDigite um número inteiro válido\033[m')
            continue
        except (KeyboardInterrupt, InterruptedError, StopIteration, StopAsyncIteration):
            print('\033[31mUsuário preferiu não digitar esse número.\033[m')
            return 0
        else:
            return n


def leiaFloat(texto = ''):
    while True:
        try:
            n = float(input(texto))
        except (ValueError, TypeError):
            print('\033[1;31mERRO!\033[m \033[31mDigite um número real válido\033[m')
            continue
        except (KeyboardInterrupt, InterruptedError, StopIteration, StopAsyncIteration):
            print('\033[31mUsuário preferiu não digitar esse número.\033[m')
            return 0
        else:
            return n
