n1 = float(input('Escreva um número: '))
n2 = float(input('Escreva outro número: '))
n3 = float(input('Escreva mais um número: '))

if n1 > n2 and n1 > n3:
    print(n1)

if n2 > n1 and n2 > n3:
    print(n2)

if n3 > n1 and n3 > n1:
    print(n3)