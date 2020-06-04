l = float(input('Qual a largura da parede: '))
a = float(input('Qual a altura da parede: '))

print('A largura da parede é {} metros.\nA altura é {} metros.\nA área é {} m2.\nVocê precisa de {} litros de tinta para pintá-la.'.format(l, a, l * a, (l * a) / 2))