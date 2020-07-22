frase = input('Digite uma frase: ').strip()

frase_junta = ''.join(frase.upper().split())

t = len(frase_junta)
c = 0

for i in range(t):
    if frase_junta[i] == frase_junta[t - 1 - i]:
        c += 1

if c == t:
    print('A frase é um palindromo')
else:
    print('A frase não é um palindromo')