nome = ''
idade = 0
sexo = ''
soma_idade = 0
idade_mais_velho = 0
homem_mais_velho = ''
cont = 0
for i in range(4):
    nome = input('Escreva o nome: ').strip()
    idade = int(input('Escreva a idade: '))
    sexo = input('Escreva o sexo M ou F: ').upper().strip()
    soma_idade += idade
    if sexo == 'F' and idade < 20:
        cont += 1
    elif sexo == 'M' and idade > idade_mais_velho:
        homem_mais_velho = nome

print('A média de idade é {} anos.'.format(soma_idade / 4))
print('O homem mais velho é o {}.'.format(homem_mais_velho))
print('{} mulheres tem menos de 20 anos'.format(cont))