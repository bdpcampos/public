//
console.log(' ')
console.log("-----------Tipo Number-------------")
console.log(' ')
//

let valor = 20
console.log(valor.toFixed(4)) //Define quantas casas decimais o valor terá

//
console.log(' ')
console.log("-----------Tipo String-------------")
console.log(' ')
//

let concatenar = "Hello" + ", " + "World" + " " + "!" //Strings são concatenaveis, numeros não.
console.log(concatenar)

//
console.log(' ')
console.log("-----------Tipo Array-------------")
console.log(' ')
//

let estados = ["São Paulo", "Goias", "Curitiba", "Minas Gerais"]
console.log(estados)
console.log(estados[3])
let itens = ["Banana", 5, true, 3.0] // Pode se armazenar tipos de dados diferentes numa array, mas é recomendado usar objetos para esse fim (dicionário)
console.log(itens)

/*Quando usar arrays?
Um exemplo: digamos que um usuário possui dois telefones. Como armazenar esses dados?
Mas e se agora ele tiver três telefones? Precisaríamos mudar nosso código-fonte criando uma terceira variável, o que não é uma solução elegante.
O uso de array nesse caso é perfeito, veja:
*/

let telefones = ['1122223323', '1123232323', '112324323218']
console.log(telefones)
telefones.push('1198587-9852')
console.log(telefones)

//Outro exemplo de uso é usar para armazenar os itens de um menu

let menu = ['Home', 'Quem somos?', 'Notícias', 'Área do cliente']
console.log(menu)

//
console.log(' ')
console.log("-----------Tipo Undefined-------------")
console.log(' ')
//

let nome;          //Uma variável será undefined quando não for atribuído um valor a ela.
console.log(nome)

console.log(nome + 1) //Uma operação matematica com Undefined gerar um resultado NaN (Not a Number)

//
console.log(' ')
console.log("-----------Tipo Null-------------")
console.log(' ')
//

let nome2 = null //É possível iniciar uma variável com null, o que significa que queremos adiar intencionalmente ou não atribuir um valor a ela.
console.log(nome2)

console.log(nome2 + 2) //Quando fazemos um cálculo e uma das variáveis utilizadas é null, o valor da mesma será convertido para 0.

//
console.log(' ')
console.log("-----------Constante-------------")
console.log(' ')
//
//Como proteger valores que nunca deveriam mudar utilizando a palavra-chave const.
//No código de uma aplicação é fácil encontrar valores que nunca devem mudar. Uma url, PI, um percentual de desconto, etc.
//Uma vez definido o valor da constante não conseguimos mais alterá-lo.
//Uma das vantagens do uso de const é o conceito de imutabilidade, que quer dizer "manter o mesmo valor" ou "não mudar".

const url = "https://www.devmedia.com.br/"
console.log(url)


//
console.log(' ')
console.log("-----------Funções Nativas String-------------")
console.log(' ')
//


let nomeTeste = "   José   Silva   "

console.log(nomeTeste)

console.log(nomeTeste.trim())  //Retorna o valor da string sem espaços tanto no início quanto no final

console.log(nomeTeste.toLowerCase())  //Retorna o valor da string em caixa baixa

console.log(nomeTeste.replace("Silva", "Teixeira"))  //Substitui um ou mais caracteres


//
console.log(' ')
console.log("-----------Funções Nativas Number-------------")
console.log(' ')
//

//Funções nativas não alteram o valor de uma variável, elas sempre retornam um novo valor.


let numTeste = 25

console.log(numTeste)

console.log(numTeste.toFixed(2)) //Retorna uma string com a quantidade de casas decimais definidas entre parênteses

console.log(numTeste.toString()) //Retorna uma string com o valor da variável

console.log(numTeste.toPrecision(4)) //Retorna uma string com a quantidade de algarismos que for passado por parâmetro.

//Basicamente toFixed(n) fornece n comprimento após o ponto decimal; toPrecision(x)fornece x comprimento total.



//
console.log(' ')
console.log("-----------Funções Nativas Array------------")
console.log(' ')
//

let arrayTeste = ["Abacaxi", 2, "Pimenta"]

console.log(arrayTeste)

arrayTeste.push("To aqui mãe!") //Insere um elemento ao final do array

console.log(arrayTeste)

arrayTeste.pop() //Remove um elemento ao final do array (o último elemento)

console.log(arrayTeste)


//
console.log(' ')
console.log("-----------Funções Nativas Boolean------------")
console.log(' ')
//

let bolTeste = true

console.log(bolTeste.toString()) // Retorna uma string com o valor "true" ou "false"
