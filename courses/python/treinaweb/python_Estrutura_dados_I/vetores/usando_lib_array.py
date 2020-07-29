import array

vetor_inteiros = array.array('b', [1,2,3])
print(vetor_inteiros)
vetor_inteiros.insert(3, 4)
print(vetor_inteiros)
print(vetor_inteiros.index(4))