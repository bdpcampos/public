from listas import lista_duplamente_ligada

class Fila():
    def __init__(self):
        self.__elementos = lista_duplamente_ligada.ListaDuplamenteLigada()

    def esta_vazia(self):
        return self.__elementos.esta_vazia()

    def enfileirar(self, elemento):
        self.__elementos.inserir(elemento)

    def desinfileirar(self):
        if self.esta_vazia():
            return None
        else:
            resultado = self.__elementos.recuperar_elemento_no(0)
            self.__elementos.remover_posicao(0)
            return resultado

    def __str__(self):
        temp = self.__elementos.__str__()
        return temp