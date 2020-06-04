
def voto(ano = 0):
    from datetime import datetime
    if datetime.now().year - ano >=18:
        return f'Com {datetime.now().year - ano} anos o voto é OBRIGATÓRIO'
    elif datetime.now().year - ano >= 16:
        return f'Com {datetime.now().year - ano} anos o voto é OPCIONAL'
    else:
        return f'Com {datetime.now().year - ano} anos o voto é NEGADO'



n = int(input('Digite seu ano de nascimento: '))

print(voto(n))