import datetime

agora = datetime.datetime.now()

ano = int(input('Em que ano você nasceu? '))

idade = agora.year - ano

if idade < 18:
    print('Você ainda vai se alistar e faltam {} anos.'.format(18 - idade))
elif idade == 18:
    print('Está na hora de se alistar.')
else:
    print('Você já passou {} anos do tempo de se alistar'.format(idade - 18))