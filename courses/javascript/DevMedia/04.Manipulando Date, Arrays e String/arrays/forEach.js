
/* JavaScript forEach(): executando uma função para cada elemento de um array 

O método forEach() executará uma função para cada elemento presente em um array.

Sintaxe
array.forEach(funcao([valorAtual, índice, array]), argumentoThis)

Parâmetros
funcao() é a função a ser executada para cada elemento do array. Pode receber três parâmetros:

valorAtual é o valor da posição atual sendo percorrida no array. Parâmetro obrigatório na declaração a função.
índice é a posição do array que está sendo lida. Parâmetro opcional da função.
array é o array a ser percorrido no forEach().Parâmetro opcional da função.
argumentoThis valor opcional a ser usado como this no momento que executar a função de callback. Parâmetro opcional do forEach().

Valor de retorno
É retornado um valor para cada posição do array conforme a lógica implementada na função.

*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0

function somar(item, indice, array) {
    total += item
    array[indice] = total
}

numeros.forEach(somar)

console.log(numeros)


//


cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
    console.log(item);
}

cores.forEach(imprimir);



//



marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);


//


nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
tamanhoNome = 0;
nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(maiorNome);
console.log(nome);