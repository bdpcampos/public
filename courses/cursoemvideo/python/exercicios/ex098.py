from time import sleep

def contador(inicio, fim, passo):
    if passo > 0:
        passo_int = passo
    elif passo < 0:
        passo_int = passo * -1
    else:
        passo_int = 1
    print('Contagem de 1 até 10, de 1 em 1: ')
    print('')
    sleep(1)
    for x in range(1, 11):
        print(x, end=' ')
        sleep(0.3)
    print('\n')
    print('Contagem de 10 até 0, de 2 em 2: ')
    print('')
    for x in range(10, -1, -2):
        print(x, end=' ')
        sleep(0.3)
    print('\n')
    print('Contagem personalizada! ')
    print('')
    if inicio > fim:
        for x in range(inicio, fim - 1, passo_int * - 1):
            print(x, end=' ')
            sleep(0.3)
    else:
        for x in range(inicio, fim + 1, passo_int):
            print(x, end=' ')
            sleep(0.3)


inicio = int(input('Inicio da contagem:'))
fim = int(input('Fim da contagem:'))
passo = int(input('Passo da contagem:'))

contador(inicio, fim, passo)