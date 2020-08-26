

// Incrementa

let botoesIncrementa = document.querySelectorAll(".btn-incrementa")

for(let botao of botoesIncrementa) {

    botao.addEventListener('click', incrementa)

    function incrementa() {
        const item = botao.closest('.item')
        const input = item.querySelector(".quantidade")
        input.value++
        const preco = pegaPrecoItem(item)
        adicionaAoTotal(preco)
    }
}


//Decrementa

let botoesDecrementa = document.querySelectorAll(".btn-decrementa")

for (let botao of botoesDecrementa){

    botao.addEventListener('click', decrementa)

    function decrementa() {
        const item = botao.closest('.item')
        const input = item.querySelector(".quantidade")

        if (input.value > 0) {
            input.value--
            const preco = pegaPrecoItem(item)
            adicionaAoTotal(-preco)
        } else {
            alert("Item com quantidade 0, adicione mais itens.")
        }
    }
}


//Zerar pedido (Esta parte fiz sozinho para treinar os conceitos aprendidos)

let botaoZerar = document.querySelector("#botao-zerar")

botaoZerar.addEventListener('click', zerarPedido)

function zerarPedido() {
    let quantidades = document.querySelectorAll(".quantidade")

    quantidades.forEach(zerarItem) // Usar forEach ao inves do for(), deixei no incrementa e decrementa para comparação!
}


//Validações do formulário de pedido

let formPedido = document.forms.pedido

formPedido.addEventListener('submit', function(event) {  //event é um parametro que o JS passa em EventListener
    let contador = 0

    const inputs = formPedido.querySelectorAll("input.quantidade")

    inputs.forEach(function(item) {
       if(item.value > 0) {
           contador++
       }
    })

    if (contador === 0) {
        alert("Nenhuma pizza foi selecionada")
        event.preventDefault()  //Usando o event passado no EventListener podemos fazer parar o evento de "submit" do formulário. Assim não enviando o mesmo.
    }
})


//Funções acessórias

function pegaPrecoItem(item) {
    
    const precoItem = item.querySelector('.preco-item')
    return Number(precoItem.textContent)
}


function adicionaAoTotal(preco) {

    const elementoTotal = document.getElementById('total')
    elementoTotal.textContent = Number(elementoTotal.textContent) + preco
}


function zerarItem(item) {
    const itemAtual = item.closest('.item')
    const preco = pegaPrecoItem(itemAtual)
    const totalItem = item.value * preco
    adicionaAoTotal(-totalItem)
    item.value = 0
}


