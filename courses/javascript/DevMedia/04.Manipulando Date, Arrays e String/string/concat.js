/*

Neste artigo vamos conhecer a função concat do JavaScript, utilizada para concatenar arrays e strings, analisando também os principais aspectos do seu funcionamento.

No caso da função Javascript concat() em uma string, ela combina o conteúdo de duas ou mais strings e tem como resultado uma nova sequência de caracteres contendo todos os valores passados como parâmetro. Essa concatenação ocorre na ordem em que os parâmetros são passados.

A função Javascript concat() em um array cria um novo vetor, unindo os elementos que lhe foram passados por parâmetro. Assim como o concat() para strings, essa função não altera o array original ou os argumentos passados como parâmetro.


str.concat(string1, string2, ..., stringN)

array.concat(valor1, valor2, ..., valorN)


Usando o concat() também é possível unir arrays e objetos. Nesse caso, a função copia a referência desses objetos para o novo array. Isso significa que o array resultante, assim como o objeto passado por parâmetro, apontam para o mesmo local. Logo, se houver alguma alteração no objeto original, a mesma irá se refletir no array final gerado pela concatenaçção

*/


var a = "Meu nome é "

var b = "Tiago!"

var c = a.concat(b)  // "Meu nome é Tiago!"


//


var array1 = ["d", "e", "v"]

var array2 = [1, 2, 3]

var array3 = array1.concat(array2)  //  ["d", "e", "v", 1, 2, 3]


//


var array1 = ["d", "e", "v"]

var object = {numero:10}

var array2 = array1.concat(object)  //  Nessa linha, concatenamos ao array (array1) um objeto (object). Ao fazer isso, uma cópia da referência desse objeto será feita para o array resultante (array2)

console.log(array2[3].numero)  // 10


object.numero = 99  //  Quando mudamos o valor dessa propriedade no objeto original, podemos perceber que esse valor também foi refletido no objeto que está dentro do array.

console.log(array2[3].numero)  //  99


array2[3].numero = 10

console.log(object.numero)  //  10

console.log(array2[3].numero)  //  10