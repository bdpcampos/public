def msg(msg):
    t = len(msg)
    print()
    print('-' * (t + 10))
    print(f'     {msg}     ')
    print('-' * (t + 10))
    print()


msg('Menu da aula')

###################################################


def soma(a, b):
    print(f'A soma de {a} e {b} = {a+b}')

msg('Definindo os parametros da def')
soma(8, 9)
soma(a=8, b=9)
soma(b=8, a=9)

###################################################
msg('Empacotamento de parametros')

# * num permite que a função receba n valores, os valores são adicionados a uma tupla

def contador(* num):
    for valor in num:
        print(valor, end='')
    print()
    print(f'Recebi os valorer {num} e são ao todo {len(num)} números.')


contador(1, 0)
contador(5, 1, 0, 3, 5, 4, 7, 9)
contador(3, 9, 5)

print()

def soma2(* num):
    s = 0
    for valor in num:
        s += valor
    print(f'A soma é {s}')


soma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

###################################################
msg('Usando funções em listas e retorno de parametros')


def dobra_lista(lst):
    pos = 0
    while pos < len(lst):
        lst[pos] *= 2
        pos += 1
    # return lst    # Normalmente o python já linka o parametro interno 'lst' com o parametro passado 'valores', sem precisar do return.
                    # Mas se quisermos que a função retorne o parametro, temos que usar o return, como por exemplo para dar print() na função.


valores = [2, 4, 8, 12, 24, 7, 3, 1]



print(valores)

dobra_lista(valores)

# print(dobra_lista(valores))  # explicado acima

print(valores)

dobra_lista(valores)

print(valores)