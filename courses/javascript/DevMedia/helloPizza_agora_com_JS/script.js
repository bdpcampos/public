
/* ----- Begin add and sub  ----- */

let input = document.querySelector(".quantidade")

let botaoIncrementa = document.querySelector(".btn-incrementa")

let botaoDecrementa = document.querySelector(".btn-decrementa")


botaoIncrementa.addEventListener('click', incrementa)

botaoDecrementa.addEventListener('click', decrementa)


function incrementa() {
    input.value++

    const item = botaoIncrementa.closest('.item')

    const precoItem = item.querySelector('.preco-item')

    const preco = Number(precoItem.textContent)

    const elementoTotal = document.getElementById('total')

    elementoTotal.textContent = Number(elementoTotal.textContent) + preco
}

function decrementa() {
    input.value--

    const item = botaoDecrementa.closest('.item')

    const precoItem = item.querySelector('.preco-item')

    const preco = Number(precoItem.textContent)

    const elementoTotal = document.getElementById('total')

    elementoTotal.textContent = Number(elementoTotal.textContent) - preco
}

/* ----- End add and sub  ----- */



