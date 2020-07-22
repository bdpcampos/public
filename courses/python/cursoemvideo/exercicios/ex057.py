sexo = ''

while sexo not in ['M', 'F']:
    sexo = input('Digite o seu sexo [M/F]').upper().strip()
    if sexo not in ['M', 'F']:
        print('O valor está errado. Digite novamente')

