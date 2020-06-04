n1 = float(input('Escreva o comprimento de uma reta: '))
n2 = float(input('Escreva o comprimento de outra reta: '))
n3 = float(input('Escreva o comprimento de uma terceira reta: '))

if n1 + n2 > n3 > n1 - n2 or n2 + n3 > n1 > n2 - n3 or n1 + n3 > n2 > n1 - n3:
    print('Formam um triangulo')

else:
    print('Não formam triangulo')