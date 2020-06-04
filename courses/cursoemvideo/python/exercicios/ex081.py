numeros = list()

continua = ''

while continua != 'N':
    numeros.append(int(input('Digite um número: ')))
    continua = input('Deseja continuar?[S/N] ').upper().strip()

print(f'Foram digitados {len(numeros)} números.')

print(f'{sorted(numeros, reverse=True)}')

if 5 in numeros:
    print('O valor 5 foi digitado e está na lista!')

