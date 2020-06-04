import datetime

ficha = dict()

ficha['nome'] = input('Nome: ').strip()
ficha['idade'] = datetime.datetime.now().year - int(input('Ano de nascimento: '))
ficha['ctps'] = int(input('CTPS [0 se não tem]: '))
if ficha['ctps'] != 0:
    ficha['ano_contratacao'] = int(input('Ano de contratação: '))
    ficha['salario'] = float(input('Salário: '))
    ficha['aposentadoria'] = (35 - (datetime.datetime.now().year - ficha['ano_contratacao'])) + ficha['idade']

print(f'Nome: {ficha["nome"]}\n'
      f'Idade: {ficha["idade"]}\n'
      f'CTPS: {ficha["ctps"]}\n')
if ficha['ctps'] != 0:
    print(f'Ano de contratação: {ficha["ano_contratacao"]}\n'
            f'Salário: {ficha["salario"]}\n'
            f'Aposenta com {ficha["aposentadoria"]} anos')