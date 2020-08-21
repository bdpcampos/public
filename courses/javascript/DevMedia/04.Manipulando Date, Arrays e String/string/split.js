/*

Nesta documentação de JavaScript veremos como utilizar o método split(), que permite dividir/separar strings.

O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caractere separador é removido das substrings resultantes no array.

----Sintaxe

string.split(separador, numeroOcorrencias)

--separador é a substring ou expressão regular a ser utilizada para separar a string. Parâmetro opcional. Caso não fornecido toda a string é retornada, sem separação.

--numeroOcorrencias é o número de ocorrências que será contabilizado para o separador especificado, ou o tamanho do array a ser criado para armazenar as divisões. Quando esse número é alcançado, todo o restante da string é descartado, não sendo incluído no array resultante.

Valor de retorno

É retornado um array em que cada posição armazena uma das substrings que foram separadas.

*/


var stringExemplo = "João da Silva Oliveira"

var resultado = stringExemplo.split(" ")  //  ["João", "da", "Silva", "Oliveira"]


//

// No exemplo a seguir separamos uma string considerando a letra a como caractere separador. Com o valor 2 para o segundo parâmetro serão consideradas apenas duas ocorrências do caractere a para a separação.

var stringExemplo = "João da Silva Oliveira"

var resultado = stringExemplo.split("a", 2)  //  ["João d", "Silv"]


//

// No exemplo a seguir demonstramos como recuperar os dados de um endereço separados por ponto enviados em uma string.

var endereco = "Rua das Hortênsias.Número 120.BairroLaranjeiras.CEP 44455-000"

var resultado = endereco.split(".")  //  ["Rua das Hortências", "Número 120", "Bairro Laranjeiras", "CEP 44455-000"]


//

// No exemplo a seguir separamos um endereço de e-mail em duas partes: o nome do usuário e o domínio da empresa.

var stringExemplo = "usuario@exemplo.com.br"

var resultado = stringExemplo.split("@")  //  ["usuario", "exemplo.com.br"]


//

// No exemplo a seguir passamos uma expressão regular como caractere separador. Essa expressão regular encontra qualquer número presente na string.

var stringExemplo = "Os números 12 devem ser descartados 34 da string."

var resultado = stringExemplo.split(/\d+/)  //  ["Os números ", " devem ser descartados ", " da string."]


//

// No exemplo a seguir demonstramos como lidar com um conteúdo no formato CSV, formato em que os dados são separados por vírgula. Para isso passamos para o método uma expressão regular.

var conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv"

var resultado = conteudoCSV.split(/\s*;\s*/)  //  ["exemplo", "com", "dados", "no", "formato", "csv"]
