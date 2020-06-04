from random import randint
from time import sleep

print('-=' * 20)
print('{:^40}'.format('PALPITES MEGA SENA'))
print('-=' * 20)

mega_sena = list()
palpite = list()

jogos = int(input('Quantos jogos serão gerados? '))

for x in range(jogos):
    for y in range(6):
        palpite.append(randint(1, 60))
    mega_sena.append(palpite[:])
    palpite.clear()
    print(f'Jogo {x + 1}: {mega_sena[x]}')
    sleep(1)