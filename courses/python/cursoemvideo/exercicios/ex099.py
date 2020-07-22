
def maior(valores):
    maior = 0
    cont = 0
    for x in valores:
        if x > maior:
            maior = x
        cont += 1
    print(f'Os valores passados foram...\n{valores}\nForam informados {cont} valores\nO maior valor é {maior}')


lista = []

while True:
    n = int(input('Digite um valor[999 para sair]: '))
    if n == 999:
        break
    lista.append(n)

maior(lista)
