from exercicios.ex107_112.moeda import moeda
from exercicios.ex107_112.dado import validacao


p = validacao.leiaDinheiro('Digite o preço: R$')

moeda.resumo(p, 80, 35)