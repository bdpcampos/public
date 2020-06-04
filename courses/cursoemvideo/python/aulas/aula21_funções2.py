def msg(msg):
    t = len(msg)
    print()
    print('-' * (t + 10))
    print(f'     {msg}     ')
    print('-' * (t + 10))
    print()


################################################################
msg('Interactive help')


# Abrir o Python Console e digitar help(), vai abrir o Ineractive help, basta digitar o nome da função. quit sai

help(print) # Outra forma é usar o help como função e passar a função que quer saber como paramentro. Rodando o programa aparece a ajuda

print('-=' * 30,'\n')

print(input.__doc__) # Uma terceira forma de acessar ajuda da função, toda função tem um __doc__, mas tem menos informações.


################################################################
msg('docstrings')


# Como criar a documentação da nossa própria função

def contador(i, f, p):
    """
    --> Faz uma contagem e mostra na tela.
    :param i: Inicio da contagem
    :param f: Fim da contagem
    :param p: Passo da contagem
    :return: Sem retorno
    ***Função criada por Bruno Campos em 12/05/2020***
    """

    for x in range(i, f, p):
        print(f'{x} ', end = '')
    print('FIM!\n')


contador(2,10,2)

print('-=' * 30,'\n')

help(contador)


################################################################
msg('Parâmetros opcionais')


def somar(a, b, c=0):   # Para criar parametros opcionais é só atribuir um valor ao parametro na def, isso faz com que
                           # se nenhum parametro for passado, a variavel virá com o valor atribuido
    s = a + b + c
    print(f'A soma vale {s}')


somar(3, 2, 5)

somar(8, 4)


################################################################
msg('Escopo de variáveis')


def teste():
    global t
    t = 15   # global diz para não criar uma variavel local, usar a variavel global
    x = 8
    n = 4   # É criada uma variável n local, que contrasta com a variável n global
    lista = [5, 6, 7]
    print(f'Na função teste, n vale {n}')  # como n é uma variavel global, ela funciona na função teste mesmo não estando declarada nela
    print(f'Na função teste x vale {x}')
    print(f'A lista na função teste: {lista}')
    print(f'Na função teste t vale {t}')



# Programa principal
n = 2
t = 11
lista = [1, 2, 3]
print(f'No programa principal, n vale {n}')
print(f'No programa principal, t antes de rodar teste() vale {t}')
print(f'A lista no programa principal: {lista}')
print('-' * 30)
teste()
print('-' * 30)
print(f'No programa principal, t depois de rodar teste() vale {t}')
# print(f'No programa principal, x vale {x}') ##  Essa linha da erro, porque x é uma variavel local da função teste e não uma variavel global do programa


################################################################
msg('Retorno de valores')


def somar2(a, b, c=0):
    s = a + b + c
    return s


print(somar2(2, 3, 7))


################################################################
msg('Exercicio com fatorial')


def fatorial(num=1):  # O parametro fica sendo opcional
    f = 1
    for x in range(num, 0, -1):
        f *= x
    return f


n = int(input('Digite um número: '))
print(f'O fatorial de n é {fatorial(n)}')

f1 = fatorial(5)
f2 = fatorial(4)
f3 = fatorial()

print(f'O fatorial 1 é {f1}\nO fatorial 2 é {f2}\nO fatorial 3 é {f3}')

print()
print('-' * 30)
print()


def par(numero=0):
    if n % 2 == 0:
        return True
    else:
        return False


num = int(input('Digite um número: '))
print(f'O número é par? {par(num)}')
if par(num):
    print('é par!')
else:
    print('Não é par')