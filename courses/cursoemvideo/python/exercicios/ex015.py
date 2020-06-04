d = int(input('Quantos dias você vai alugar o carro? '))
k = int(input('Quantos kilometros você vai rodar? '))
print('Você vai alugar o carro por {} dias e vai rodar {} kilometros, o valor do carro será de R${:.2f}'.format(d, k, d * 60 + k * 0.15))