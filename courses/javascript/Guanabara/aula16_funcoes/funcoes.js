
function parOuImpar (n) {
    if(n % 2 === 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(parOuImpar(4))


//Pode passar um parametro padrao para que se se não vier um parametro da chamada a função não quebre.
function soma (n1 = 0,n2 = 0) {
    return n1 + n2
}

console.log(soma(2,6))


//No JS dá para colocar uma função dentro de uma variável -->

let v = function(x) {
    return x*2
}

console.log(v(5))


//Recursão

function fatorial(n) {
    if(n === 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))