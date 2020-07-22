n1 = int(input('Digite um valor: '))
n2 = int(input('Digite outro valor: '))
operacao = 0
print('Escolha uma opção:\n1. Somar\n2. Multiplicar\n3. Maior.\n4. Novos números.\n5. Sair do programa')
while operacao != 5:
    operacao = int(input())
    if operacao == 1:
        print('{} + {} = {}'.format(n1, n2, n1 + n2))
    elif operacao == 2:
        print('{} x {} = {}'.format(n1, n2, n1 * n2))
    elif operacao == 3:
        if n1 > n2:
            print('{} é o maior valor.'.format(n1))
        else:
            print('{} é o maior valor.'.format(n2))
    elif operacao == 4:
        n1 = int(input('Digite um valor: '))
        n2 = int(input('Digite outro valor: '))

print('{:=^40}'.format('FIM'))