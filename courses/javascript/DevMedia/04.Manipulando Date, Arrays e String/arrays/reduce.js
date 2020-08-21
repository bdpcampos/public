/*
reduce() permite concatenar os elementos do Array a partir de seus elementos.

A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único. Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.

---array.reduce(função de callback, initialValue)

-array: Vetor de origem sobre o qual estamos iterando para aplicar a função;

-callback: Função a ser chamada para cada item do array de origem e cujo o retorno produz um valor final baseado em alguma regra. Essa função recebe até quatro parâmetros: 1) o valor retornado da última iteração. Na primeira iteração esse argumento receberá o initialValue, se ele for informado; 2) o valor atual que está sendo processado pelo array; 3) o índice atual do item no array de origem; 4) o array original;

-initialValue: É o valor inicial do resultado da operação que será passado para a função de callback na primeira iteração. Em um cenário no qual desejamos somar os itens de um vetor, por exemplo, esse argumento representa o valor inicial da soma, que apesar de ser zero na maioria dos casos, pode variar de acordo com a situação. Por exemplo, podemos desejar somar os elementos de mais de um array. Nesse caso, o resultado da soma do primeiro poderia ser passado como initialValue para o segundo, e então a nova soma seria acumulada na segunda função. Esse argumento, no entanto, é opcional.

Array.reduce((anterior: any, atual: any) => concatenacao: any): any

*/


var numeros = [1, 2, 3, 4, 5, 6];

var total = numeros.reduce(function(total, numero){return total + numero} , 0 )

console.log(total);

// Ou com arrow function  ===>

/*

var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce((total, numero) => total + numero, 0);
console.log(total);

*/


//


const listaCarros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
  ]


  const sum = listaCarros.reduce((previous, current) => previous + current.preco, 0)

  console.log(sum) // 144