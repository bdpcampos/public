
let numeros = []
let input = document.getElementById('tNumero')
let display = document.getElementById('p2')
let res = document.getElementById('div_res')
let vInput = Number(input.value)


function isEmpty(array){
    return array.length === 0
}


function adicionar() {
    if (numeros.indexOf(vInput) !== -1) {
        alert ('Não é aceito números repetidos')
        return
}   else if (vInput > 100 || vInput < 1) {
        alert ('Somente são aceitos números de 1 a 100')
        return
}   else {
        res.innerHTML = ''
        if (isEmpty(numeros)) {
            display.innerHTML += `${vInput} `
        } else {
            display.innerHTML += `,${vInput} `
        }
        numeros.push(vInput)
        }
}


function finalizar() {
    if (isEmpty(numeros)) {
        alert('Adcione números antes de finalizar!')
        return
    }

    let nCadastrados = 0
    let nMaior = 0
    let nMenor = 100
    let nSoma = 0

    for (let item in numeros) {

        nCadastrados++

        nSoma += numeros[item]

        if (numeros[item] > nMaior) {
            nMaior = numeros[item]
        }

        if (numeros[item] < nMenor) {
            nMenor = numeros[item]
        }
    }

    res.innerHTML = `<p>Ao todo temos <strong>${nCadastrados}</strong> números cadastrados.</p>
                     <p>O maior valor informado foi <strong>${nMaior}</strong></p>
                     <p>O menor valor informado foi <strong>${nMenor}</strong></p>
                     <p>Somando todos os valores, temos <strong>${nSoma}</strong></p>
                     <p>A média dos valores digitados é <strong>${nSoma / nCadastrados}</strong></p>`
}