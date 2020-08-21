/* O método map percorre cada item de um Array e retorna um novo Array ao final de sua execução. 

A função map() é uma das mais utilizadas em JavaScript, tanto quanto for ou while, dada a imersão dessa linguagem no paradigma da programação funcional. Aprenda nessa documentação como utilizar essa função em seus códigos.

Nos permite percorrer um vetor e obter um novo array cujos itens são o resultado de uma função de callback que recebe como parâmetro cada item original. Por exemplo, podemos partir de um array de valores numéricos e obter um novo contendo o quadrado de cada item original.

Aqui é importante destacar que o método map() não modifica o array original, ele retorna um novo array com os itens resultantes do mapeamento.

Array.prototype.map((value: any, index: number, array: Array<any>) => item): Array<any>

arrayOriginal.map(callback)


*/


const lista = [ 1, 5, 8, 4 ]

  const resultado = lista.map(item => item * 5)

  console.log(resultado) // [ 5, 25, 40, 20 ]



  //



var numeros = [1, 2, 3, 4, 5]; //vetor original

var quadrados = numeros.map(function(item){
   return Math.pow(item, 2); //retorna o item original elevado ao quadrado
});

console.log(quadrados); //imprime 1,4,9,16,25

/* O método map() é invocado a partir de um array e recebe como parâmetro uma função de callback, que é invocada para cada item e retorna o valor do item equivalente no array resultante. No exemplo acima, por exemplo, essa função de callback retorna o número original elevado ao quadrado.*/


/* 

Callback é uma função que será executada para cada elemento no vetor original e retornará uma representação dele com base em alguma lógica, que será o item equivalente no vetor resultante. Sua estrutura é a seguinte:

--> function(valorAtual, indice, array)

O parâmetro valorAtual é obrigatório e representa o próprio item da iteração atual. Ou seja, à medida que a função map itera sobre o array, esse parâmetro receberá cada item.
O parâmetro indice é opcional e representa o índice do item da iteração atual.
O parâmetro aray também é opcional e representa o próprio array ao qual os itens pertencem. 

É retornado um novo array cujos itens são uma representação dos elementos do array original.

*/


var vencedores = [
  {
      nome : "Equipe Super",
      pais : "Brasil"
  },
  {
      nome : "Time Maximo",
      pais : "EUA"
  },
  {
      nome : "Mega Grupo",
      pais : "Canadá"
  }
];

var podioPorPais = vencedores.map(function(item, indice){
  return item.pais;
});

console.log(podioPorPais); //O resultado é: Brasil,EUA,Canadá.



//Neste próximo exemplo temos um array de produtos com seus respectivos preços de venda e desejamos simular a aplicação de um reajuste em todos os preços, mas sem modificar a informação original.




var produtos = [
  {
      nome : "Smartphone 5' Android",
      preco : 1200
  },
  {
      nome : "Notebook 4GB Windows 10",
      preco : 2100
  },
  {
      nome : "SmartTV 50' LED",
      preco : 8700
  }
];

let produtosComReajuste = produtos.map(function(item){
  return {
              nome : item.nome,
              preco : item.preco * 1.15 //reajuste de 15% nos preços, vai criar novo array com os valores reajustados
          }
}
)

produtosComReajuste.forEach(function(item){
    console.log(`${item.nome.padEnd(30)} - ${item.preco.toLocaleString(("pt-BR", {style: "currency", currency : "BRL"}))}`)
}
)



//Neste exemplo veremos como usar o recurso de arrow functions, do ECMAScript 6, para definir a função de callback com uma sintaxe mais simples:



var quadrados = [25, 16, 9, 4, 1];

var raizes = quadrados.map(numero => Math.sqrt(numero));

console.log(raizes);  //O resultado aqui é: 5,4,3,2,1



//Este exemplo usa novamente uma arrow function como função de callback, mas dessa vez ela recebe também o índice do item:


var copas = [1958, 1962, 1970, 1994, 2002];

var titulos = copas.map((ano,indice) => `${indice + 1} : ${ano}`);

console.log(titulos.join("   "));  //O resultado agora é a impressão do número do título (índice + 1, pois o índice começa em zero) e o ano em que o título foi obtido.



/*
-----Map x Foreach-----

Os arrays em JavaScript possuem um outro método, chamado forEach, que às vezes confunde os desenvolvedores iniciantes quanto às diferenças entre ele e o map. Ambos percorrem o vetor original e para cada item podem executar um determinado procedimento, porém as semelhanças são apenas essas. O método forEach tem o objetivo apenas de iterar sobre um array, enquanto o map usa essa iteração como meio para chegar ao seu objetivo final, que é obter um novo array resultante do mapeamento do original.

Enquanto o map tem como retorno um novo array, o forEach não retorna nada. Ou seja, ele serve apenas para percorrer o vetor original e nos permite executar algum procedimento com cada item.

Então, quando usar cada um? Caso você queira obter um novo array cujos itens podem ser gerados a partir da aplicação dos itens originais em uma determinada função, então use o map. Se você precisa apenas percorrer um array e executar um determinado bloco de código para cada item, então use o forEach.

*/



/*

-----Map e a programação funcional-----

Desde seu lançamento, a linguagem JavaScript recebeu grandes atualizações e passou a contar com recursos muito desejados pelos programadores, alguns dos quais têm origem (ou principal uso) no paradigma funcional de programação. Exemplos disso foram a inclusão de métodos que promovem a imutabilidade e o uso de funções de alta ordem, dois conceitos fundamentais na programação funcional.

O map é um desses métodos: ele não altera o array original (imutabilidade) e recebe como parâmetro uma função (logo, ele é uma função de alta ordem).

*/