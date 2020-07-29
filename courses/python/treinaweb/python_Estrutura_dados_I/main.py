from vetores import vetor
from listas import lista_ligada
from listas import lista_duplamente_ligada
from pilhas import pilha
from filas import fila
from conjuntos import conjunto


print(30 * '-', 'MENU', 30 * '-')
print('1. Vetores')
print('2. Listas Ligadas')
print('3. Listas Duplamente Ligadas')
print('4. Pilhas')
print('5. Filas')
print('6. Conjuntos')

menu = int(input('Digite a opção desejada: '))

if menu == 1:
    vetor_teste = vetor.Vetor(0)
    vetor_teste.inserir_elemento_posicao(1,0)
    vetor_teste.inserir_elemento_posicao(2, 1)
    vetor_teste.inserir_elemento_posicao(3, 2)
    vetor_teste.inserir_elemento_posicao(4, 2)
    vetor_teste.inserir_elemento_final(1)
    print(vetor_teste)
    vetor_teste.remover_elemento_indice(2)
    print(vetor_teste)
    vetor_teste.remover_elemento(1)
    print(vetor_teste)
    vetor_teste.remover_elemento(1)
    print(vetor_teste)
    vetor_teste.remover_elemento(5)
    print(vetor_teste)

elif menu == 2:
    lista_teste = lista_ligada.ListaLigada()
    lista_teste.inserir(1)
    lista_teste.inserir(2)
    lista_teste.inserir(3)
    lista_teste.inserir_posicao(1,10)
    print(lista_teste)
    print(lista_teste.contem(3))
    print(lista_teste.indice(55))
    lista_teste.remover_elemento(3)
    print(lista_teste)

elif menu == 3:
    lista_teste = lista_duplamente_ligada.ListaDuplamenteLigada()
    lista_teste.inserir(1)
    lista_teste.inserir(2)
    lista_teste.inserir(3)
    lista_teste.inserir_posicao(1,10)
    print(lista_teste)
    print(lista_teste.contem(3))
    print(lista_teste.indice(2))
    lista_teste.remover_elemento(10)
    print(lista_teste)

elif menu == 4:
    pilha_teste = pilha.Pilha()
    pilha_teste.empilhar(5)
    pilha_teste.empilhar(7)
    pilha_teste.empilhar(9)
    pilha_teste.empilhar(11)
    print(pilha_teste.desempilhar())
    print(pilha_teste.desempilhar())
    print(pilha_teste.desempilhar())
    print(pilha_teste.desempilhar())

elif menu == 5:
    fila_teste = fila.Fila()
    fila_teste.enfileirar(1)
    fila_teste.enfileirar(2)
    fila_teste.enfileirar(3)
    fila_teste.enfileirar(4)
    print(fila_teste)
    print(fila_teste.desinfileirar())
    print(fila_teste)
    print(fila_teste.desinfileirar())
    print(fila_teste)
    print(fila_teste.desinfileirar())
    print(fila_teste)
    print(fila_teste.desinfileirar())
    print(fila_teste)
    print(fila_teste.desinfileirar())

elif menu == 6:
    conjunto_teste = conjunto.Conjunto()
    conjunto_teste.inserir(1)
    conjunto_teste.inserir(2)
    conjunto_teste.inserir(3)
    conjunto_teste.inserir(3)
    print(conjunto_teste.inserir(3))
    print(conjunto_teste)
    conjunto_teste.remover_elemento(4)
    print(conjunto_teste)
    print(conjunto_teste.inserir("Bruno Campos"))
    conjunto_teste.inserir("Python")
    print(conjunto_teste)
