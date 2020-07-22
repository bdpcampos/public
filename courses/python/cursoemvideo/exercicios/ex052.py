n = int(input('Digite um numero: '))
t = 0
for i in range(n, 0, -1):
    if n % i == 0:
        t += 1

if t == 2:
    print('É número primo!')
else:
    print('Não é numero primo!')