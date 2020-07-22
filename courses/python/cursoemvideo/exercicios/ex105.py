


def notas(* notas, sit = False):
    """
    --> Recebe n notas de alunos e retorna um dicionário com Quantidade de notas, A maior nota, A menor nota, A média da turma e a situação.
    :param notas: Recebe n notas passadas na função, não recebe lista
    :param sit: Parametro opcional para mostrar a situação do aluno.
    :return: retorna um dicionário, total, maior, menor, média e situação (opcional)
    """
    total = maior = menor = media = 0
    dict_notas = dict()
    for x in notas:
        total += 1
        if total == 1:
            maior = menor = x
        if x > maior:
            maior = x
        if x < menor:
            menor = x
        media += x
    media /= total
    dict_notas['total'] = total
    dict_notas['maior'] = maior
    dict_notas['menor'] = menor
    dict_notas['media'] = media
    if sit:
        if media < 5:
            dict_notas['situação'] = 'RUIM'
        elif media < 7:
            dict_notas['situação'] = 'RAZOÁVEL'
        else:
            dict_notas['situação'] = 'BOA'
    return dict_notas


# Programa principal


resp = notas(9.5, 9, 6.5, sit=True)
print(resp)

help(notas)