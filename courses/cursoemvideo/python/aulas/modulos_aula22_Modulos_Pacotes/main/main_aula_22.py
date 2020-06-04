from aulas.modulos_aula22_Modulos_Pacotes.uteis.numeros import funcoes
from aulas.modulos_aula22_Modulos_Pacotes.uteis.textos import mensagens

mensagens.msg('Módulos')

num = int(input('Digite um valor: '))

fat = funcoes.fatorial(num)

print(f'O fatorial de {num} é {fat}.')
print(f'O dobro de {num} é {funcoes.dobro(num)}.')
print(f'O triplo de {num} é {funcoes.triplo(num)}.')

#################################################

mensagens.msg('Pacotes')

# Criação de pacotes usando o python package (new --> Python Package