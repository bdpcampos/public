from mapas import associacao
from listas import lista_duplamente_ligada

class Mapa():
    def __init__(self):
        self.__elementos = lista_duplamente_ligada.ListaDuplamenteLigada()
        self.__numero_categorias = 10

        for i in range(self.__numero_categorias):
            self.__elementos.inserir(lista_duplamente_ligada.ListaDuplamenteLigada())
