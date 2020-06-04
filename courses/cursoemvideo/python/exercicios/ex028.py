import random

n = random.randint(1, 5)

guess = int(input('Guess wich number from 1 to 5 the computer picked: '))

if guess == n:
    print('Você acertou! O computador pensou em {}.'.format(n))
else:
    print('Você errou! O computador pensou em {}.'.format(n))
