
ficha = list()

while True:
    nome = input('Nome: ').strip()
    nota1 = float(input('Nota 1: '))
    nota2 = float(input('Nota 2: '))
    media = (nota1 + nota2) / 2
    ficha.append([nome, [nota1, nota2], media])

#     alunos.append(input('Nome: ').strip())
#     notas[0].append(float(input('Nota 1: ')))
#     notas[1].append(float(input('Nota 2: ')))

    continuar = input('Deseja continuar? [S/N] ').upper().strip()
    if continuar == 'N':
        break
#
# ficha.append(alunos[:])
# ficha.append(notas[:])

print('-=' * 25)
print('{:<6}{:<20}{:<9}'.format('No.', 'NOME', 'MÉDIA'))
print('-' * 35)

for i, x in enumerate(ficha):
    print(f'{i:<6}{x[0]:<20}{x[2]:<9.1f}')

while True:
    print('-' * 35)
    qual_aluno = int(input('Mostrar as notas de qual aluno? (999 interompe): '))
    if qual_aluno == 999:
        break
    else:
        print(f'As notas de {ficha[qual_aluno][0]} são {ficha[qual_aluno][1][0]} e {ficha[qual_aluno][1][1]}')