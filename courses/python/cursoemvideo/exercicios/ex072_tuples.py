
numero = int(input('Digite um número entre 0 e 20: '))

while not 0 <= numero <= 20:
    numero = int(input('Tente novamente. Digite um número entre 0 e 20: '))

numero_por_extenso = ('zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis',
                      'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze',
                      'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito',
                      'dezenove', 'vinte')

print(f'Você digitou o número {numero_por_extenso[numero]}')
