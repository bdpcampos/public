/*
Nesta documentação de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.

O método substring() retorna o trecho de uma string de acordo com os números informados por parâmetro.

string.substring(posicaoInicial, posicaoFinal)

----Parâmetros

--posicaoInicial é um número inteiro que define a posição a partir da qual o texto deve ser selecionado. Se informado um número negativo, passa-se a considerar o valor 0 (primeira posição da string).

--posicaoFinal é um número inteiro que define a posição final da substring a ser selecionada. Esse parâmetro é opcional. Se informado um número negativo, passa-se a considerar o valor 0 (primeira posição da string). Se o valor desse parâmetro for menor que o valor do primeiro parâmetro, automaticamente é feita uma troca entre eles.

Caso seja especificado um valor maior que o tamanho da string (string.length), o método assumirá a posição string.length.

--Valor de retorno

É retornada a nova string contendo apenas o trecho selecionado.

*/


var stringExemplo = "JavaScript é na DevMedia"

var resultado = stringExemplo.substring(0, 10)  // “JavaScript”


//


var stringExemplo = "JavaScript é na DevMedia"

var resultado = stringExemplo.substring(4, 10)  // “Script”


//


var stringExemplo = "JavaScript é na DevMedia"

var resultado = stringExemplo.substring(-9, 24)  // “JavaScript é na DevMedia”“JavaScript é na DevMedia”


//

// No exemplo a seguir demonstramos como selecionar apenas o texto entre as tags HTML que destacam o texto em negrito. Para isso também utilizamos a propriedade length.

var htmlExemplo = "<b>Texto em destaque</b>"

var resultado = htmlExemplo.substring(3, htmlExemplo.length - 4)  //  “Texto em destaque”