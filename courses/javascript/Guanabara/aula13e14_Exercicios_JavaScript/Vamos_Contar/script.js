function contar() {

    //Colocando objetos do DOM nas variáveis
    let inicio = document.getElementById("tInicio")
    let fim = document.getElementById('tFim')
    let passo = document.getElementById('tPasso')
    let res = document.getElementById('res')

    //Colocando os valores dos objetos nas variáveis
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    //Fazendo os testes de erros e tratamento
    if (inicio.value === "" || fim.value === "") {
        res.innerHTML = `Impossível contar! Coloque números em início e fim.`
        return

    } else if (passo.value === '0' || passo.value === '') {
        alert('O Passo não pode ser 0, vamos considerar como 1')
        passo.value = 1 //Objeto no DOM recebe 1
        p = 1 // Variável recebe 1
    }
    //

    res.innerHTML = "Contando:</br>"

    //Contagem crescente
    if (i <= f) {
        for (let c = i;c <= f; c += p) {
            res.innerHTML += ` ${c}👉`
        }
    //Contagem regressiva
    } else {
        for (let c = i;c >= f; c -= p) {
            res.innerHTML += ` ${c}👉`
        }
    }
    
    //
    res.innerHTML += "🏁"
}