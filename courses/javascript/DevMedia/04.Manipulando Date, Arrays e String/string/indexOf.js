/**
 
Nesta documentação de JavaScript veremos como o método indexOf() do objeto String pode ser utilizado para recuperar a posição inicial de um elemento, dentro de uma sequência de caracteres. Caso esse elemento não exista, é retornado o valor -1.

Uma string pode ser vista como um array de caracteres, indexado da esquerda para a direita, onde a primeira posição é 0 e última o comprimento da string menos um.

----Sintaxe

string.indexOf(elemento, posicaoInicial)

----Parâmetros

--elemento é o valor a ser encontrado dentro da string;

--posicaoInicial [opcional] é o número que determina a posição inicial a partir da qual o elemento deve ser buscado. Por padrão é 0. Caso seja informado um valor negativo, a busca começa da posição 0. Caso seja informado um valor maior que o da string em análise, a busca começa a partir da posição referente ao tamanho dessa string (string.length).

Valor de retorno

É retornada a posição da primeira ocorrência do elemento na string. Caso o elemento não seja encontrado, é retornada a posição -1.


 */


var stringExemplo = "Aprendendo JavaScript na DevMedia!"

var posicao = stringExemplo.indexOf("JavaScript")  //  11


//

// No exemplo a seguir utilizamos o parâmetro posicaoInicial. A busca pela substring “end” começará na posição 4, isto é, na primeira letra “n” de stringExemplo:

var stringExemplo = "Aprendendo JavaScript na DevMedia!"

var resultado = stringExemplo.indexOf("end", 4)  //  6


// 

// No exemplo a seguir demonstramos que indexOf() é case sensitive. Sendo assim, a palavra “javascript” não será encontrada, pois devido aos caracteres em minúscula, ela é diferente de “JavaScript”.

var stringExemplo = "Aprendendo JavaScript na DevMedia!"

var resultado = stringExemplo.indexOf("javascript")  //  O valor retornado é -1 (não encontrado)


//

// Por ser indexOf() um método do objeto String,podemos chamá-lo a partir de qualquer instância desse objeto, inclusive no caso abaixo:

var posicao = "Aprendendo JavaScript na DevMedia!".indexOf("end", 4)  //  6


//

// Neste exemplo desejamos saber se o valor de cep atende a um certo formato. Para isso verificamos se na posição 2 temos o caractere “.” e se na posição 6 temos o caractere “-”.

var cep = "22.000-000"

var cepFormatado = false

if(cep.indexOf(".") == 2 && cep.indexOf("-") == 6){
    cepFormatado = true;
}


//

// indexOf() é geralmente utilizada em conjunto com algum outro método da classe String para, a partir dela, obtermos um novo valor. Neste exemplo desejamos deixar apenas a palavra DevMedia em negrito, adicionando a tag <b> ao redor desta palavra:


var stringExemplo = "Aprendendo JavaScript na DevMedia!"

var posicaoInicial = stringExemplo.indexOf("DevMedia")
var posicaoFinal = posicaoInicial + "DevMedia".length
var htmlExemplo = ""

for(caractere in stringExemplo) {
    htmlExemplo += stringExemplo.charAt(caractere);

    if(caractere == posicaoInicial - 1) {
        htmlExemplo += "<b>";
    }

    if(caractere == posicaoFinal - 1) {
        htmlExemplo += "</b>";
    }
}

// Ao final da execução deste script o valor de htmlExemplo será: "Aprendendo JavaScript na <b>DevMedia</b>!".


//







