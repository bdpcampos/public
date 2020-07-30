
let numeros = []
let input = document.getElementById("tNumero")
let display = document.getElementById('p2')
let res = document.getElementById('div_res')


function isEmpty(array){
    return array.length === 0
}


function adicionar() {
    let vInput = Number(input.value)
    if (numeros.indexOf(vInput) !== -1) {
        alert ('Não é aceito números repetidos')
        return
}   else if (vInput > 100 || vInput < 1) {
        alert ('Somente são aceitos números de 1 a 100')
        return
}   else {
        res.innerHTML = ''
        if (isEmpty(numeros)) {
            display.innerHTML += `${vInput}`
        } else {
            display.innerHTML += `, ${vInput}`
        }
        numeros.push(vInput)
        input.value = ''  //limpa o valor do input após a incerssão de dados
        input.focus()  //volta o foco (cursor) para o input
        }
}


function finalizar() {
    if (isEmpty(numeros)) {
        alert('Adcione números antes de finalizar!')
        return
    }

    let nCadastrados = 0
    let nMaior = numeros[0]
    let nMenor = numeros[0]
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