/* O método map percorre cada item de um Array e retorna um novo Array ao final de sua execução. 

A função map() é uma das mais utilizadas em JavaScript, tanto quanto for ou while, dada a imersão dessa linguagem no paradigma da programação funcional. Aprenda nessa documentação como utilizar essa função em seus códigos.

Array.prototype.map((value: any, index: number, array: Array<any>) => item): Array<any>
*/


const lista = [ 1, 5, 8, 4 ]

  const resultado = lista.map(item => item * 5)

  console.log(resultado) // [ 5, 25, 40, 20 ]
