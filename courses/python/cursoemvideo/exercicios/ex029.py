vel = float(input('Qual a velocidade do carro? '))

if vel > 80.0:
    print('Você foi multado! Sua velocidade é {:.1f} Km/h e você recebeu uma multa de R${:.2f}.'.format(vel, (vel - 80)* 7))
else:
    print('Você está dentro do limite de velocidade')