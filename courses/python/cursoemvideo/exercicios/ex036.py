print('')
print('{:=^40}'.format(' Programa da casa própria '))
print('')
casa = float(input('\033[1mQual o valor da casa que você quer comprar?\033[m '))
salario = float(input('\033[1mQual o valor do seu salário?\033[m '))
anos = float(input('\033[1mEm quantos anos você quer pagar?\033[m '))
prestacao = casa / (anos * 12)
if prestacao <= salario * 0.3:
    print('Seu empréstimo foi concedido!')
    print('A prestação mensal é de R${:.2f}'.format(prestacao))
else:
    print('Seu empréstimo foi negado!')