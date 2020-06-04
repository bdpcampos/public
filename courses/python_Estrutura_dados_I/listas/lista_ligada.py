from .no import No

class ListaLigada():
    def __init__(self):
        self.__primeiro_no = None
        self.__ultimo_no = None
        self.__tamanho = 0

    def inserir(self, elemento):
        novo_no = No(elemento)
        if self.esta_vazia():
            self.__primeiro_no = novo_no
            self.__ultimo_no = novo_no
        else:
            self.__ultimo_no.proximo = novo_no
            self.__ultimo_no = novo_no
        self.__tamanho += 1

    def inserir_posicao(self,posicao, elemento):
        if posicao == 0:
            novo_no = No(elemento)
            novo_no.proximo = self.__primeiro_no
            self.__primeiro_no = novo_no
            self.__tamanho += 1
        elif posicao == self.__tamanho:
            novo_no = No(elemento)
            self.__ultimo_no.proximo = novo_no
            self.__ultimo_no = novo_no
            self.__tamanho += 1
        elif posicao > 0 and posicao < self.__tamanho:
            no_anterior = self.recuperar_no(posicao - 1)
            no_atual = self.recuperar_no(posicao)
            novo_no = No(elemento)
            no_anterior.proximo = novo_no
            novo_no.proximo = no_atual
            self.__tamanho += 1
        else:
            pass

    def contem(self,elemento):
        for x in range(self.__tamanho):
            no_atual = self.recuperar_no(x)
            if no_atual.elemento == elemento:
                return True
        return False

    def indice(self,elemento):
        for x in range(self.__tamanho):
            no_atual = self.recuperar_no(x)
            if no_atual.elemento == elemento:
                return x
        return -1

    def esta_vazia(self):
        return self.__tamanho == 0

    def __str__(self):
        temp = self.__primeiro_no
        elementos = ''
        while(temp):
            elementos = f'{elementos}{temp.elemento} '
            temp = temp.proximo
        return elementos

    def recuperar_elemento_no(self, posicao):
        no = self.recuperar_no(posicao)
        if no != None:
            return no.elemento
        return None

    def recuperar_no(self, posicao):
        resultado = 0
        if self.__tamanho - 1 >= posicao:
            for x in range(posicao + 1):
                if x == 0:
                    resultado = self.__primeiro_no
                else:
                    resultado = resultado.proximo
            return resultado
        else:
            return None

    def remover_elemento(self,elemento):
        no_remover = self.indice(elemento)
        if no_remover == -1:
            print("Elemento não existe")
        else:
            self.remover_posicao(no_remover)

    def remover_posicao(self, posicao):
        if posicao == 0:
            proximo_no = self.__primeiro_no.proximo
            self.__primeiro_no = proximo_no
            self.__tamanho -= 1
        elif posicao == self.__tamanho - 1:
            no_anterior = self.recuperar_no(posicao - 1)
            no_anterior.proximo = None
            self.__ultimo_no = no_anterior
            self.__tamanho -= 1
        elif posicao > 0 and posicao < self.__tamanho:
            no_anterior = self.recuperar_no(posicao - 1)
            no_atual = self.recuperar_no(posicao)
            no_anterior.proximo = no_atual.proximo
            no_atual = None
            self.__tamanho -= 1
        else:
            pass


