from random import randint
from time import sleep

def rolar_dados():
    sleep(0.3)
    print('.', end='')
    sleep(0.3)
    print('.', end='')
    sleep(0.3)
    print('.', end='')
    sleep(0.3)
    print('.', end='')
    sleep(0.3)
    print('.', end='')

jogo = dict()

print('-=' * 25)
print(f'{"Jogo de dados":^50}')
print('-=' * 25)

n = input('\nJogador 1 aperte [Q] e [ENTER] para jogar o dado: ')
jogo['jogador1'] = randint(1, 6)
rolar_dados()
print(f'O dado caiu no {jogo["jogador1"]}')

print('-' * 50)

n = input('\nJogador 2 aperte [Q] e [ENTER] para jogar o dado: ')
jogo['jogador2'] = randint(1, 6)
rolar_dados()
print(f'O dado caiu no {jogo["jogador2"]}')

print('-' * 50)

n = input('\nJogador 3 aperte [Q] e [ENTER] para jogar o dado: ')
jogo['jogador3'] = randint(1, 6)
rolar_dados()
print(f'O dado caiu no {jogo["jogador3"]}')

print('-' * 50)

n = input('\nJogador 4 aperte [Q] e [ENTER] para jogar o dado: ')
jogo['jogador4'] = randint(1, 6)
rolar_dados()
print(f'O dado caiu no {jogo["jogador4"]}')

print('-' * 50)
print(f'{"Resultados":^50}')
print('-' * 50)

cont = 0
for k, v in sorted(jogo.items(), key=lambda item: item[1], reverse=True):
    cont += 1
    print(f' {cont}º lugar - O {k} tirou o numero {v}')

print('-' * 50)