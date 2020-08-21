/*

Nesta documentação de JavaScript veremos como utilizar o método replace(), que permite substituir uma sequência de caracteres por outra.

O método replace() percorre toda a string em busca da sequência de caracteres a ser substituída. Caso essa sequência de caracteres não seja encontrada, nenhuma substituição é realizada; caso seja encontrada, uma nova string, com a substituição feita, é devolvida pelo método.

Em caso de mais de uma string a ser substituída, replace() substituirá apenas a primeira delas. Caso seja necessário substituir todas, deve-se utilizar uma expressão regular no primeiro parâmetro.


----Sintaxe

string.replace(substring|expReg, novaSubstring|funcao)

----Parâmetros


--substring é a string a ser localizada e que deseja-se substituir.
 ou
--expReg é uma expressão regular. Ao invés de informar uma substring é possível passar como parâmetro uma expressão regular.


--novaSubstring é a string que deve substituir a substring ou os elementos encontrados pela expressão regular (expReg) informada no primeiro parâmetro.
 ou
--funcao é a função que pode ser executada caso a substring ou a expressão regular seja validada dentro da string com o conteúdo a ser modificado.


Valor de retorno

É retornada a nova string com a substituição feita. Caso não haja substituição a fazer, a string original é retornada.


*/


var exemplo = "Aprendendo JavaScript na DevMedia!"

var resultado = exemplo.replace("JavaScript", "PHP")  //  “Aprendendo PHP na DevMedia!”


//

// No exemplo a seguir demonstramos o que fazer para substituir mais de uma string.

var exemplo = "Aprendendo JavaScript na DevMedia! JavaScript é a linguagem do momento!!!"

var resultado = exemplo.replace(/JavaScript/g, "PHP")  //  “Aprendendo PHP na DevMedia! PHP é a linguagem do momento!!!”


//

// No exemplo a seguir demonstramos como substituir palavras desconsiderando a diferença entre letras maiúsculas e minúsculas (case-insensitive).

var exemplo = "Substituindo JavaScript, JAVAscript e javascript por JS"

var resultado = exemplo.replace(/javascript/gi, "JS")  //   “Substituindo JS, JS e JS por JS”


//

// No exemplo a seguir demonstramos como formar um CPF sem os caracteres não numéricos para o formato correto.

var cpf = "12345678901"

var resultado = cpf.replace(/(\d{ 3 })(\d{ 3 })(\d{ 3 })(\d{ 2 })/, "$1.$2.$3-$4")  //  “123.456.789-01”


//

// No exemplo a seguir demonstramos como substituir as tags <b> em um documento por tags <i>.

var stringExemplo = "texto 1 <b> texto 2 </b> texto 3 <b> texto 4 </b>"

stringExemplo = stringExemplo.replace(/<b>/g , "<i>")

var resultado = stringExemplo.replace(/<\/b>/g, "</i>")  //  “texto 1 <i> texto 2 </i> texto 3 <i> texto 4 </i>”.


//

// No exemplo a seguir demonstramos como executar uma função para substituir/atualizar um valor presente em uma string.

var string = "Contrato no valor de R$ 1000. Lucro de R$ 200 para a empresa."

var resultado = string.replace(/\d+/g, (x) => Math.floor(x*1.05))

console.log(resultado)
                                                                    
        //  “Contrato no valor de R$ 1050. Lucro de R$ 210 para a empresa.”