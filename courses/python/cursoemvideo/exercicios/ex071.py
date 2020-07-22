valor_sacado = cedula_50 = cedula_20 = cedula_10 = cedula_1 = 0

print('{:=^40}'.format(''))
print('{}{:^40}{}'.format('\033[1m', 'BANCO DO ZEKINHA','\033[m'))
print('{:=^40}'.format(''))

valor_sacado = int(input('Digite o valor a ser sacado: R$'))

while valor_sacado >= 50:
    valor_sacado -= 50
    cedula_50 += 1

while valor_sacado >= 20:
    valor_sacado -= 20
    cedula_20 += 1

while valor_sacado >= 10:
    valor_sacado -= 10
    cedula_10 += 1

while valor_sacado >= 1:
    valor_sacado -= 1
    cedula_1 += 1

print(f'Total de {cedula_50} cédulas de R$50\nTotal de {cedula_20} cédulas de R$20\nTotal de {cedula_10} cédulas de R$10\nTotal de {cedula_1} cédulas de R$1\n')
print('{:=^40}'.format(''))