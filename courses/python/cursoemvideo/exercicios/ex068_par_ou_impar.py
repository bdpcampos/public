import random

contador = resultado = 0

while True:

    par_impar_usuario = input('Escolha par [P] ou impar [I] ').upper().strip()

    if par_impar_usuario not in 'PI':
        continue

    numero_usuario = int(input('Digite um número: '))

    numero_computador = random.randint(1, 10)

    resultado = (numero_computador + numero_usuario) % 2

    if resultado == 0:
        par_impar = 'PAR'
        if par_impar_usuario == 'P':
            contador += 1
            print(f'Você ganhou! O computador jogou {numero_computador} e você {numero_usuario}. Total de {numero_usuario + numero_computador} deu {par_impar}')
        else:
            print(f'Você perdeu. O computador jogou {numero_computador} e você {numero_usuario}. Total de {numero_usuario + numero_computador} deu {par_impar}')
            break

    else:
        par_impar = 'IMPAR'
        if par_impar_usuario == 'I':
            contador += 1
            print(f'Você ganhou! O computador jogou {numero_computador} e você {numero_usuario}. Total de {numero_usuario + numero_computador} deu {par_impar}')
        else:
            print(f'Você perdeu. O computador jogou {numero_computador} e você {numero_usuario}. Total de {numero_usuario + numero_computador} deu {par_impar}')
            break

print('')
print(f'Você ganhou {contador} vezes!')


