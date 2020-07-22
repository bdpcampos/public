
print('\033[1;30mTeste\033[m')
print('\033[4;33mTeste\033[m')
print('\033[1;34;40mTeste\033[m')
print('\033[30mTeste\033[m')
print('\033[mTeste\033[m')
print('\033[7;30mTeste\033[m')
a = 3
b = 5
print('Os valores são \33[1;32m{}\033[m e \033[1;31m{}\033[m !!!'.format(a,b))

nome = 'Bruno'
print('Olá {}{}{} !!'.format('\033[4;34m',nome,'\033[m'))

cores = {'limpa':'\033[m',
         'azul':'\033[34m',
         'amarelo':'\033[33m',
         'pretoebranco':'\033[7;30m'}

print('Olá {}{}{} !!'.format(cores['amarelo'], nome, cores['limpa']))

#pesquisar Colorize do python