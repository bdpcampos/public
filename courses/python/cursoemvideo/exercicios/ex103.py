def ficha(nome = '', gols = ''):
    if nome == '':
        nome = '<desconhecido>'
    if gols == '' or not gols.isnumeric():
        gols = '0'
    print(f'O jogador {nome} fez {gols} gol(s) no campeonato.')


n = input('Nome do jogador: ').strip()
g = input('Número de gols: ').strip()
ficha(n,g)