/*

Nesta documentação de JavaScript veremos como utilizar a propriedade length para obter o tamanho de uma string ou de um array.

A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.

string.length

*/


var stringExemplo = "Texto qualquer"

var tamanho = stringExemplo.length  //  14


//


var carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"]

var tamanho = carros.length  //  6


//


// Também podemos utilizar a propriedade para validar o tamanho de uma senha:

var senha = "abcde";

if (senha.length < 6) {
   console.log("A senha precisa ter pelo menos 6 (seis) caracteres.");
}


//

// No exemplo a seguir demonstramos como fazer uma validação simples de CPF:

var cpfExemplo ="123.456.789-12";

if (cpfExemplo.length == 14) {
         console.log("CPF com tamanho correto!");
} else {
         console.log("Verificar campo CPF");
}