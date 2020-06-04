nome = input('Digite o seu nome completo: ').strip()

primeiro = nome.split()[0]
print(primeiro)
ultimo = nome.split()
print(ultimo[len(ultimo)-1])