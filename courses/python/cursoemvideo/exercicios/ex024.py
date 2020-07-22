cidade = input("Digite o nome da cidade: ").strip()
primeiro = cidade.split()

if 'SANTO' in primeiro[0].upper():
    print('A cidade começa com Santo')
else:
    print('A cidade não começa com Santo')

