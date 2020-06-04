import random

numero_do_computador = random.randint(0,10)

numero_do_usuario = -1

contador = 0

while numero_do_usuario != numero_do_computador or numero_do_usuario < 0 or numero_do_usuario > 10:
    numero_do_usuario = int(input('Digite um número de 0 a 10: '))
    contador += 1
    if numero_do_usuario != numero_do_computador:
        print('Você não acertou o número do computador')

print('Você acertou em {} tentativas! O computador escolheu {} e você escolheu {}'. format(contador, numero_do_computador, numero_do_usuario))

