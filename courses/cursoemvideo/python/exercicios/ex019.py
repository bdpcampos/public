import random

n = int(input('Quantos alunos tem na classe? '))
l = list()

for i in range(n):
    x = input("Digite o nome do aluno: ")
    l.append(x)

choose = random.choice(l)

print(choose)
