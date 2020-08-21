/*

Nesta documentação de JavaScript veremos como utilizar o método slice(), que permite “fatiar” uma string ou array e recuperar parte dos seus elementos.

O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. Lembre-se que a primeira posição de uma string ou array é a posição de número 0.

----Sintaxe

string.slice(posicaoInicial, posicaoFinal)

----Parâmetros

--posicaoInicial é a posição inicial a partir da qual o trecho deve ser selecionado. Pode receber valores negativos. Neste caso a contagem dos caracteres deve começar da direita para a esquerda.

--posicaoFinal é a posição final, até onde o trecho da string ou do array deve ser selecionado -1, isto é, posição excludente. Esse parâmetro é opcional. Pode receber valores negativos. Neste caso a contagem dos caracteres deve começar da direita para a esquerda.

Valor de retorno

É retornada a nova string ou o novo array selecionado.

*/


var carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"]

var selecionados = carros.slice(2, 4)  //  ["Focus", "Jetta"]


//


var nome = "João José da Silva Xavier"

var selecionados = nome.slice(4)  //  “José da Silva Xavier”


//


var nome = "João José da Silva Xavier"

var selecionados2 = nome.slice(-2, 9)  // O valor atribuído a selecionados é: “”. Ao começar da posição -2, o método não seguirá até o final da string e depois retomará no início desta até chegar à posição 9.

console.log(selecionados2)


//


var carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"]

var selecionados = carros.slice(-4, -2)  // ["Focus", "Jetta"]