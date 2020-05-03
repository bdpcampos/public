
class Stack():
    def __init__(self):
        self.__element = list()

    def stack_up(self, elemento):
        self.__element.append(elemento)

    def unstack(self):
        return self.__element.pop()

    def positions(self):
        positions = 0
        positions = self.__element.count(1) + self.__element.count(0)
        return positions
