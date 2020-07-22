import random

print('')
print('{:=^40}'.format(' Jokenpô '))
print('')

jokenpo = ['Pedra', 'Papel', 'Tesoura']

print('Escolha:\n1. Pedra\n2. Papel\n3. Tesoura')

escolha = 0

while escolha not in [1, 2, 3]:
    escolha = int(input())

escolha_pc = random.randint(1,3)

print('Você escolheu {} e o computador escolheu {}'.format(jokenpo[escolha - 1], jokenpo[escolha_pc - 1]))

if escolha_pc == 1 and escolha == 3 or escolha_pc == 2 and escolha == 1 or escolha_pc == 3 and escolha == 2:
    print('O computador venceu!')

elif escolha == escolha_pc:
    print('Deu empate!')

else:
    print('Você venceu!!!')