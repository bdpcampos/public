n1 = float(input('Digite a nota 1: '))
n2 = float(input('Digite a nota 2: '))
s = (n1 + n2) / 2
if s < 5.0:
    print('Reprovado!')
elif 5 <= s < 7.0:
    print('Recuperação')
else:
    print('Aprovado')