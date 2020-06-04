idade = pessoas_mais_18_anos = homens = mulheres_menos_20_anos = 0
sexo = continuar = ''

while True:
    idade = int(input('Digite a idade: '))

    sexo = input('Digite o sexo [M/F}: ').upper().strip()

    continuar = input('Você quer continuar [S/N]: ').upper().strip()

    if idade > 18:
        pessoas_mais_18_anos += 1

    if sexo == 'M':
        homens += 1

    if sexo == 'F' and idade < 20:
        mulheres_menos_20_anos += 1

    if continuar == 'N':
        break

print(f'Existem {pessoas_mais_18_anos} pessoas com mais de 18 anos.\nExistem {homens} homens.\nExistem {mulheres_menos_20_anos} mulherem com menos de 20 anos.')
