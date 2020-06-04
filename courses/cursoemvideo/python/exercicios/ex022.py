nome = input('Digite o seu nome: ')

print(f'O seu nome em letras maiusculas --> {nome.upper()} .')
print(f'O seu nome em letras minusculas --> {nome.lower()} .')
nome_sem_espaco = ''.join(nome.split())
print(f'O seu nome tem {len(nome_sem_espaco)} letras.')
nome_split = nome.split()
print(len(nome_split[0]))