
/*-------------FOR-------------*/

var carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621 }
  ]
  
  var total = 0

  for(var i = 0; i < carros.length; i++) {
    total += carros[i].preco
}

console.log(total)


/*-------------FOR OF-------------*/


var total2 = 0

for(const carro of carros) {
    total2+= carro.preco
}

console.log(total2)


/*-------------FOR IN-------------*/


var total3 = 0

for(const j in carros) {
    total3 += carros[j].preco
}

console.log(total3)



