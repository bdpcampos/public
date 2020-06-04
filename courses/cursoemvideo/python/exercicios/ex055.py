maior = 0
menor = 0

for i in range(5):
    n = float(input('Peso: '))
    if i == 0:
        maior = n
        menor = n
    elif n > maior:
        maior = n
    elif n < menor:
        menor = n


print('Maior peso: {} quilos.\nMenor peso: {} quilos.'.format(maior, menor))