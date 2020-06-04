
try:
    a = int(input('Numerador: '))
    b = int(input('Denominador: '))
    r = a / b

except (TypeError, ValueError):
    print(f'Digite um valor correto.')

except ZeroDivisionError:
    print(f'Não é possivel dividir um número por 0')

except KeyboardInterrupt:
    print(f'Você não digitou nenhum dado')

else:
    print(f'O resultado é {r}')

finally:
    print('Volte sempre')