dicionario = dict()

dicionario['nome'] = input('Digite o nome do aluno: ')
dicionario['media'] = float(input('Digite a média do aluno: '))
if dicionario['media'] >= 7:
    dicionario['situacao'] = 'APROVADO'
else:
    dicionario['situacao'] = 'REPROVADO'
print('-=' * 25)
print(f'O aluno {dicionario["nome"]} teve média {dicionario["media"]} e está {dicionario["situacao"]:-^12}')