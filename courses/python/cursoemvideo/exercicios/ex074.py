from random import randint

num_tuple = (randint(0, 9), randint(0, 9), randint(0, 9), randint(0, 9), randint(0, 9))

for x in range (0, len(num_tuple)):
    print((num_tuple[x]), end = ' ')

print(f'\nO maior número é o {sorted(num_tuple)[-1]} e o menor número é o {sorted(num_tuple)[0]}')

