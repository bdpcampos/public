/*
O método includes verifica se um Array possuí determinado elemento e retorna um booleano.

Array<item>.includes(searchElement: item): boolean

*/

const items = [ 10, 20, 30 ]

  console.log(
    items.includes(10), // true
    items.includes(50), // false
    items.includes(20), // true
  )