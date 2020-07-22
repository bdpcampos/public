def leiaInt(texto = ''):
    while True:
        n = input(f'{texto}')
        if n.isnumeric():
            return n
        else:
            print('\033[1;31mERRO!\033[m \033[31mDigite um número inteiro válido\033[m')

print(leiaInt('Digite um número: '))