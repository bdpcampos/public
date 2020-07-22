# valores = list()
#
# valores.append(5)
# valores.append(9)
# valores.append(3)
# valores.append(4)
# valores.append(8)
#
# for c, v in enumerate(valores):
#     print(f'Na posição {c} encontrei o valor {v}!')
#
# print('Cheguei ao fim da lista')
#
# #####################################################################
#
# # print('#'*30)
# #
# # valores2 = list()
# #
# # for i in range(0,5):
# #     valores2.append(int(input('Digite um valor: ')))
# #
# # for c, v in enumerate(valores2):
# #     print(f'Na posição {c} encontrei o valor {v}!')
# #
# # print('Cheguei ao fim da lista')
#
# #####################################################################

print('#'*30)

a = [2, 3, 4, 7]

b = a # Isso não faz b receber a, na verdade ele faz a ligação entre as listas e o que é alterada em uma, altera na outra.
      # não importa a ordem que foram ligadas.

print(f'Lista a: {a}')

print(f'Lista b: {b}')

print('-' * 20)

b[2] = 8

print(f'Lista a: {a}')

print(f'Lista b: {b}')

print('-' * 20)

b = a[:] # Desta forma b recebe uma cópia dos itens de a, agora não existe mais a ligação

b[2] = 4

print(f'Lista a: {a}')

print(f'Lista b: {b}')

print('-' * 20)