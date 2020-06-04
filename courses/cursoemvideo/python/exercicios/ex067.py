while True:
    n = int(input('Digite um número inteiro positivo[Para sair digite um numero negativo]: '))
    if n < 0:
        break
    for x in range (1,11):
        print(f'{n} x {x} = {n * x}')
    print('')
